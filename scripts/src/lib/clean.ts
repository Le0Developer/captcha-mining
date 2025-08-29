import { webcrack } from "./webcrack";

export async function cleanJavascript(js: string, demangle: boolean = true): Promise<string> {
  const versions = new Set();
  for(let i = 0; i < 10; i++) {
    console.time(`iteration ${i}: ${js.length} chars`);
    const cracked = await webcrack(js, {
      unpack: true,
      unminify: true,
      deobfuscate: true,
    })
    console.timeEnd(`iteration ${i}: ${js.length} chars`);
    if (cracked.code === js || versions.has(cracked.code))
      break;
    js = cracked.code;
    versions.add(js);
  }
  if (!demangle) {
    console.log("done")
    return js
  }

  console.time(`demangling: ${js.length} chars`);
  const res = await webcrack(js, {
    unpack: true,
    unminify: true,
    deobfuscate: true,
    mangle: "stable",
  })
  console.timeEnd(`demangling: ${js.length} chars`);
  return res.code
}

