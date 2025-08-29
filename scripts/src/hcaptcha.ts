import path from "node:path";

import { alert, notify } from "./lib/notifications";
import fs from "fs-extra";
import { tryAndPush } from "./lib/git";
import { cleanJavascript } from "./lib/clean";

const dir = path.resolve("../hcaptcha");
await fs.ensureDir(dir);

const assets = [
  ["https://newassets.hcaptcha.com/captcha/v1/%s/hcaptcha.js", "hcaptcha.js"],
  [
    "https://newassets.hcaptcha.com/captcha/v1/%s/challenge/image_label_binary/challenge.js",
    "image_label_binary_challenge.js",
  ],
  [
    "https://newassets.hcaptcha.com/captcha/v1/%s/challenge/image_label_area_select/challenge.js",
    "image_label_area_select_challenge.js",
  ],
  [
    "https://newassets.hcaptcha.com/captcha/v1/%s/static/hcaptcha.html",
    "hcaptcha.html",
  ],
];

export async function updateHCaptcha() {
  const version = await updateHCaptchaAssets();
  if (version) await updateHCaptchaHS(version);
}

async function updateHCaptchaAssets(): Promise<string | undefined> {
  const res = await fetch("https://hcaptcha.com/1/api.js");
  const text = await res.text();

  if (!res.ok) {
    await alert(`Failed to fetch hCaptcha API: ${res.status} ${text}`);
    return;
  }

  const version = /\/captcha\/v1\/([a-f\d]+)\//.exec(text)?.[1];
  console.log(`hCaptcha version: ${version}`);
  if (!version) {
    await alert(`Failed to parse hCaptcha version from ${res.url}`);
    return;
  }

  const versionDir = path.join(dir, "archive", version);
  const current = path.join(dir, "current");
  if ((await fs.pathExists(versionDir)) && (await fs.pathExists(current))) {
    console.log("Already got this version");
    return version;
  }

  const cleaned = await cleanJavascript(text);

  await fs.ensureDir(versionDir);
  await fs.writeFile(path.join(versionDir, "api.js"), text);
  await fs.writeFile(path.join(versionDir, "api.clean.js"), cleaned);

  await fs.ensureDir(current);
  await fs.writeFile(path.join(current, "api.js"), text);
  await fs.writeFile(path.join(current, "api.clean.js"), cleaned);

  for (const [url, file] of assets) {
    const actualUrl = url.replace("%s", version);
    console.log(`Fetching ${actualUrl}`);
    const res = await fetch(actualUrl);
    const text = await res.text();
    if (!res.ok) {
      await alert(`Failed to fetch ${file}: ${res.status} ${text}`);
      continue;
    }

    await fs.writeFile(path.join(versionDir, file), text);
    await fs.writeFile(path.join(current, file), text);
    if (file.slice(-3) === ".js") {
      const cleaned = await cleanJavascript(text);
      await fs.writeFile(
        path.join(versionDir, file.replace(".js", ".clean.js")),
        cleaned,
      );
      await fs.writeFile(
        path.join(current, file.replace(".js", ".clean.js")),
        cleaned,
      );
    }
  }

  const url = await tryAndPush(
    [
      path.join("hcaptcha", "archive", version, "*.js"),
      path.join("hcaptcha", "archive", version, "*.html"),
      path.join("hcaptcha", "current", "*.js"),
      path.join("hcaptcha", "current", "*.html"),
    ],
    `hCaptcha version ${version}`,
  );

  await notify(`Updated hCaptcha version ${version}: ${url}`);

  return version;
}

const hs = [
  "https://newassets.hcaptcha.com%s/hsw.js",
  "https://newassets.hcaptcha.com%s/hsl.js",
  "https://newassets.hcaptcha.com%s/hsj.js",
];

async function updateHCaptchaHS(version: string) {
  // request for https://accounts.hcaptcha.com/demo
  const response = await fetch(
    `https://api.hcaptcha.com/checksiteconfig?v=${version}&host=accounts.hcaptcha.com&sitekey=a5f74b19-9e45-40e0-b45d-47ff91b7a6c2&sc=1&swa=1&spst=1`,
    {
      method: "POST",
    },
  );

  if (!response.ok) {
    const text = await response.text();
    await alert(
      `Failed to fetch hCaptcha siteconfig: ${response.status} ${text}`,
    );
    return;
  }

  const data = await response.json();
  const result = [];

  result.push("features.json", JSON.stringify(data.features, null, 2));

  const payload = JSON.parse(atob(data.c.req.split(".")[1]));
  const base = payload.l;
  const hsVersion = base.split("/").pop();
  const hsDir = path.join(dir, "archive", hsVersion);

  if (await fs.pathExists(hsDir)) {
    console.log("Already got this HS version");
    return;
  }

  for (const endpoint of hs) {
    const url = endpoint.replace("%s", base);
    console.log(`Fetching ${url}`);
    const res = await fetch(url);
    const text = await res.text();
    if (!res.ok) {
      await alert(`Failed to fetch ${url}: ${res.status} ${text}`);
      continue;
    }
    result.push(`${path.basename(url)}`, text);

    const cleaned = await cleanJavascript(text, false);
    result.push(`${path.basename(url, ".js")}.clean.js`, cleaned);
  }

  const current = path.join(dir, "current");
  await fs.ensureDir(hsDir);
  await fs.ensureDir(current);

  const paths = [];
  for (let i = 0; i < result.length; i += 2) {
    const file = result[i];
    const content = result[i + 1];
    await fs.writeFile(path.join(hsDir, file), content);
    await fs.writeFile(path.join(current, file), content);
    paths.push(path.join(hsDir, file));
    paths.push(path.join(current, file));
  }

  const url = await tryAndPush(paths, `hCaptcha HS version ${hsVersion}`);

  await notify(`Updated hCaptcha HS version ${hsVersion}: ${url}`);
}
