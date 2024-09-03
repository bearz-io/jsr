import * as dnt from "jsr:@deno/dnt"
import type {  } from "jsr:@deno/dnt/transform"
import { isAbsolute,  basename } from "jsr:@std/path@^1.0.3";

const args = Deno.args;
let mod = args[0];

if (!isAbsolute(mod)) {
    if (mod.startsWith("./")) {
        mod = Deno.cwd() + "/" + mod.slice(2);
    } else {
        mod = Deno.cwd() + "/" + mod;
    }
}

const dirName = basename(mod);
const denoJson = await Deno.readTextFile(mod + "/deno.json");
const denoCfg = JSON.parse(denoJson);
export interface EntryPoint {
    /**
     * If the entrypoint is for an npm binary or export.
     * @default "export"
     */
    kind?: "bin" | "export";
    /** Name of the entrypoint in the "binary" or "exports". */
    name: string;
    /** Path to the entrypoint. */
    path: string;
}

const entryPoints: EntryPoint[] = [];

for (const name of Object.keys(denoCfg.exports)) {
    if (typeof name === "string") {
        const path = denoCfg.exports[name];
        entryPoints.push({
            kind: "export",
            name: name,
            path: mod + "/" + path.slice(2),
        });
    }
}

await dnt.emptyDir("./npm/" + dirName);


await dnt.build({
    entryPoints,
    
    outDir: "./npm/" + dirName,
    esModule: true,
    scriptModule: false,
    packageManager: "pnpm",
    package: {
        name: denoCfg.name as string,
        version: denoCfg.version as string,
    },
    shims: {
        deno: true,
    }
})


