import { webcrack } from "./webcrack";

export async function cleanJavascript(js: string, demangle: boolean = true): Promise<string> {
  const res = await webcrack(js, {
    unpack: true,
    unminify: true,
    deobfuscate: true,
    mangle: demangle ? "stable" : undefined,
  })
  return res.code
}

