import path from "node:path";

import { alert, notify } from "./lib/notifications";
import fs from "fs-extra";
import { tryAndPush } from "./lib/git";
import { cleanJavascript } from "./lib/clean";

const dir = path.resolve("../turnstile");
await fs.ensureDir(dir);

export async function updateTurnstile() {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/api.js");
  const text = await res.text();

  if (!res.ok) {
    await alert(`Failed to fetch Turnstile: ${res.status} ${text}`);
    return;
  }

  const version = res.url.split("/").at(-2);
  console.log(`Turnstile version: ${version}`);

  if (!version) {
    await alert(`Failed to parse Turnstile version from URL: ${res.url}`);
    return
  }

  const versionDir = path.join(dir, "archive", version);
  const current = path.join(dir, "current");
  if (await fs.pathExists(versionDir) && await fs.pathExists(current)) {
    console.log("Already got this version");
    return;
  }

  const cleaned = await cleanJavascript(text);

  await fs.ensureDir(versionDir);
  await fs.writeFile(path.join(versionDir, "api.js"), text);
  await fs.writeFile(path.join(versionDir, "api.clean.js"), cleaned);

  await fs.ensureDir(current);
  await fs.writeFile(path.join(current, "api.js"), text);
  await fs.writeFile(path.join(current, "api.clean.js"), cleaned);

  const url = await tryAndPush([
    path.join(versionDir, version, "*.js"),
    path.join(current, "*.js"),
  ], `Turnstile version ${version}`);

  await notify(`Updated Turnstile version ${version}: ${url}`);
}

