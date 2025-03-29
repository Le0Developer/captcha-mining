import path from "node:path";
import { Buffer } from "node:buffer";

import { alert, notify } from "./lib/notifications";
import fs from "fs-extra";
import { tryAndPush } from "./lib/git";

const dir = path.resolve("../bunny-shield");
await fs.ensureDir(dir);

const assets = [
  "shield-challenge.js",
  "shield-worker.js",
  "challenge-styles.css",
  "challenge.svg",
]

export async function updateBunnyShield() {
  const files = [];
  for (const file of assets) {
    const res = await fetch(`https://www.bunny.net/.bunny-shield/assets/${file}`);
    const text = await res.text();
    if (!res.ok) {
      await alert(`Failed to fetch ${file}: ${res.status} ${text}`);
      continue;
    }
    files.push({ file, text });
  }

  const fullBytes = new Uint8Array(files.reduce((acc, { text }) => acc + text.length, 0) + files.length);
  let offset = 0;
  for (const { text } of files) {
    const bytes = new TextEncoder().encode(text);
    fullBytes.set(bytes, offset);
    fullBytes[offset + bytes.length] = 0x00;
    offset += bytes.length + 1;
  }

  const version = Buffer.from(new Uint8Array(await crypto.subtle.digest("SHA-256", fullBytes))).toHex().slice(0, 16);
  console.log(`Bunny Shield version: ${version}`);

  const versionDir = path.join(dir, "archive", version);
  const current = path.join(dir, "current");
  if (await fs.pathExists(versionDir) && await fs.pathExists(current)) {
    console.log("Already got this version");
    return;
  }

  await fs.ensureDir(versionDir);
  await fs.ensureDir(current);

  for(const { file, text } of files) {
    await fs.writeFile(path.join(versionDir, file), text);
    await fs.writeFile(path.join(current, file), text);
  }

  const url = await tryAndPush(assets.map((name) => [
    path.join(current, name),
    path.join(versionDir, name),
  ]).flat(), `Bunny Shield version: ${version}`);

  await notify(`Bunny Shield updated to version ${version}: ${url}`);
}

