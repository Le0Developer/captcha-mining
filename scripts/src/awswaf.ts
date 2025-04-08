import path from "node:path";

import { alert, notify } from "./lib/notifications";
import fs from "fs-extra";
import { tryAndPush } from "./lib/git";
import { cleanJavascript } from "./lib/clean";

const dir = path.resolve("../awswaf");
await fs.ensureDir(dir);

export async function updateAWSWAF() {
  const res = await fetch("https://www.skool.com/");
  const text = await res.text();

  const scriptURL = text.match(/https:\/\/[\w.-]+\.(token|sdk)\.awswaf\.com\/[^\"]+\.js/);
  if (!scriptURL) {
    console.log(text);
    await alert("AWS-WAF: Failed to find script URL");
    return;
  }

  const version = scriptURL[0].split("/").slice(3, -1).join("-");
  console.log(`AWS-WAF version: ${version}`);

  const versionDir = path.join(dir, "archive", version);
  const current = path.join(dir, "current");
  if (await fs.pathExists(versionDir) && await fs.pathExists(current)) {
    console.log("Already got this version");
    return;
  }

  const res2 = await fetch(scriptURL[0]);
  const text2 = await res2.text();

  const cleaned = await cleanJavascript(text2, false);

  await fs.ensureDir(versionDir);
  await fs.writeFile(path.join(versionDir, "challenge.js"), text2);
  await fs.writeFile(path.join(versionDir, "challenge.clean.js"), cleaned);

  await fs.ensureDir(current);
  await fs.writeFile(path.join(current, "challenge.js"), text2);
  await fs.writeFile(path.join(current, "challenge.clean.js"), cleaned);

  const url = await tryAndPush([
    path.join(versionDir, version, "*.js"),
    path.join(current, "*.js"),
  ], `AWS-WAF version ${version}`);

  await notify(`Updated AWS-WAF version ${version}: ${url}`);
}

