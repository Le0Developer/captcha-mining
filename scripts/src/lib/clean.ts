import { webcrack } from "./webcrack";

export async function cleanJavascript(js: string, demangle: boolean = true): Promise<string> {
  const versions = new Set();
  while (true) {
    const cracked = await webcrack(js, {
      unpack: true,
      unminify: true,
      deobfuscate: true,
    })
    if (cracked.code === js || versions.has(cracked.code))
      break;
    js = cracked.code;
    versions.add(js);
  }
  if (!demangle) {
    return js
  }

  const res = await webcrack(js, {
    unpack: true,
    unminify: true,
    deobfuscate: true,
    mangle: "stable",
  })
  return res.code
}

