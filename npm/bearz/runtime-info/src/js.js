/**
 * ## Overview
 *
 * The runtime-constants module is helpful for JavaScript runtime detection
 * which is useful for writing compatability layers in modules for
 * different runtimes.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { RUNTIME, BUN, DENO, NODE, BROWSER, CLOUDFLARE } from "@bearz/runtime-constants";
 *
 * console.log(RUNTIME);
 * console.log("bun", BUN);
 * console.log("deno", DENO);
 * console.log("node", NODE);
 * console.log("browser", BROWSER);
 * console.log("cloudflare", CLOUDFLARE);
 * ```
 *
 * [MIT License](./LICENSE.md)
 */
const g = globalThis;
/**
 * Returns true if the runtime is `bun`, otherwise, `false`.
 */
export const BUN = g.Bun !== undefined;
/**
 * Returns true if the runtime is `deno`, otherwise, `false`.
 */
export const DENO = g.Deno !== undefined;
/**
 * Returns true if the runtime is node-like like `node` or `bun`, otherwise, `false`.
 */
export const NODELIKE = g.process !== undefined;
/**
 * Returns true if the runtime is `node`, otherwise, `false`.
 */
export const NODE = !BUN && NODELIKE;
const nav = g.navigator;
const userAgent = nav?.userAgent;
/**
 * Returns `true` if the runtime is `cloudflare`, otherwise, `false`.
 */
export const CLOUDFLARE = userAgent?.includes("Cloudflare-Workers") || false;
/**
 * Returns `true` if the runtime is a  `browser`, otherwise, `false`.
 */
export const BROWSER = g.window !== undefined && !NODELIKE && !DENO && !CLOUDFLARE;
let runtimeName = "unknown";
let version = "";
let nodeVersion = "";
if (BUN) {
    const bun = g.Bun;
    const process = g.process;
    const versions = process.versions;
    runtimeName = "bun";
    version = bun.version;
    nodeVersion = versions.node;
}
else if (DENO) {
    runtimeName = "deno";
    const deno = g.Deno;
    const v = deno.version;
    version = v.deno;
}
else if (CLOUDFLARE) {
    runtimeName = "cloudflare";
}
else if (NODE) {
    runtimeName = "node";
    const process = g.process;
    const versions = process.versions;
    nodeVersion = versions.node;
    version = nodeVersion;
}
else if (BROWSER) {
    runtimeName = "browser";
}
else {
    runtimeName = "unknown";
}
/**
 * The runtime version.
 */
export const VERSION = version;
/**
 * The node version if the runtime is `node`, otherwise, an empty string.
 */
export const NODE_VERSION = nodeVersion;
/**
 * The runtime name: `bun`, `deno`, `node`, `browser`, `cloudflare`, or `unknown`.
 */
export const RUNTIME = runtimeName;
