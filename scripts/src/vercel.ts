import path from "node:path";
import { Buffer } from "node:buffer";

import { alert, notify } from "./lib/notifications";
import fs from "fs-extra";
import { tryAndPush } from "./lib/git";
import { cleanJavascript } from "./lib/clean";
import { load } from "cheerio";
import beautify from "js-beautify";

const dir = path.resolve("../vercel-security");
await fs.ensureDir(dir);

const assets = [
  "challenge.v2.min.js",
  "challenge.v2.wasm",
]

export async function updateVercelSecurity() {
  const files: Array<{
    file: string;
    buffer: Buffer;
  }> = [];
  {
    const res = await fetch("https://nextjs-boilerplate-kappa-puce-85.vercel.app/");
    const text = await res.text();
    const $ = load(text);

    const script = $("script");
    const scriptContent = script.text()
      .replace(/\="2\.\d+\.60\.[^"]*"/, `="<token>"`);
    script.remove();

    files.push({
      file: "challenge.html",
      buffer: Buffer.from(beautify.html($.html().replace(/\w+::\d+-\w+/g, "<request id>"))),
    });

    const cleaned = await cleanJavascript(scriptContent);
    files.push({
      file: "challenge.js",
      buffer: Buffer.from(cleaned)
    })
  }

  for (const file of assets) {
    const res = await fetch(`https:///vercel.com/.well-known/vercel/security/static/${file}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    if (!res.ok) {
      await alert(`Failed to fetch ${file}: ${res.status} ${buffer}`);
      continue;
    }
    if (file.endsWith(".js")) {
      const text = buffer.toString("utf-8");
      const cleaned = await cleanJavascript(text);
      files.push({ file, buffer: Buffer.from(cleaned) });
    } else {
      files.push({ file, buffer: buffer });
    }
  }

  const fullBytes = new Uint8Array(files.reduce((acc, { buffer }) => acc + buffer.length, 0) + files.length);
  let offset = 0;
  for (const { buffer } of files) {
    fullBytes.set(buffer, offset);
    fullBytes[offset + buffer.length] = 0x00;
    offset += buffer.length + 1;
  }

  const version = Buffer.from(new Uint8Array(await crypto.subtle.digest("SHA-256", fullBytes))).toString("hex").slice(0, 16);
  console.log(`Vercel Security version: ${version}`);

  const versionDir = path.join(dir, "archive", version);
  const current = path.join(dir, "current");
  if (await fs.pathExists(versionDir) && await fs.pathExists(current)) {
    console.log("Already got this version");
    return;
  }

  await fs.ensureDir(versionDir);
  await fs.ensureDir(current);

  for (const { file, buffer } of files) {
    await fs.writeFile(path.join(versionDir, file), buffer);
    await fs.writeFile(path.join(current, file), buffer);
  }

  const url = await tryAndPush(assets.map((name) => [
    path.join(current, name),
    path.join(versionDir, name),
  ]).flat(), `Vercel Security version: ${version}`);

  await notify(`Vercel Security updated to version ${version}: ${url}`);
}

