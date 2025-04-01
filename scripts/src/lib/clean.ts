import { webcrack } from "./webcrack";

export async function cleanJavascript(js: string, demangle: boolean = true): Promise<string> {
  while (true) {
    const cracked = await webcrack(js, {
      unpack: true,
      unminify: true,
      deobfuscate: true,
    })
    if (cracked.code === js)
      break;
    js = cracked.code;
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

