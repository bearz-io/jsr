import { equal, no, ok } from "@bearz/assert";
import { BROWSER, BUN, CLOUDFLARE, DENO, NODE, NODELIKE, RUNTIME } from "./js.js";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const { test } = await import('vitest')

const g = globalThis as Record<string, unknown>;
test("runtime-info::RUNTIME", () => {
    if (g.Deno !== undefined) {
        equal(RUNTIME, "deno");
        ok(DENO, "DENO must be true");
        no(NODE, "NODE must be false");
        no(BUN, "BUN must be false");
        no(CLOUDFLARE, "CLOUDFLARE must be false");
        no(BROWSER, "BROWSER must be false");
        no(NODELIKE, "NODELIKE must be false");
        return;
    }

    if (g.Bun !== undefined) {
        equal(RUNTIME, "bun");
        no(DENO, "DENO must be false");
        no(NODE, "NODE must be false");
        ok(BUN, "BUN must be true");
        no(CLOUDFLARE, "CLOUDFLARE must be false");
        no(BROWSER, "BROWSER must be false");
        ok(NODELIKE);
        return;
    }

    if (g.process !== undefined) {
        equal(RUNTIME, "node");
        no(DENO, "DENO must be false");
        ok(NODE, "NODE must be true");
        no(BUN, "BUN must be false");
        no(CLOUDFLARE, "CLOUDFLARE must be false");
        no(BROWSER, "BROWSER must be false");
        ok(NODELIKE);
        return;
    }

    const navigator = g.navigator as Record<string, unknown> | undefined;
    const userAgent = navigator?.userAgent as string | undefined;

    const cf: boolean = (navigator && userAgent &&
        userAgent.includes("Cloudflare-Workers")) || false;

    if (cf) {
        equal(RUNTIME, "cloudflare");
        no(DENO, "DENO must be false");
        no(NODE, "NODE must be false");
        no(BUN, "BUN must be false");
        ok(CLOUDFLARE, "CLOUDFLARE must be true");
        no(BROWSER, "BROWSER must be false");
        no(NODELIKE, "NODELIKE must be false");
        return;
    }

    if (navigator && userAgent) {
        equal(RUNTIME, "browser");
        no(DENO, "DENO must be false");
        no(NODE, "NODE must be false");
        no(BUN, "BUN must be false");
        no(CLOUDFLARE, "CLOUDFLARE must be false");
        ok(BROWSER, "BROWSER must be true");
        no(NODELIKE, "NODELIKE must be false");
        return;
    }

    equal(RUNTIME, "unknown");
    no(DENO, "DENO must be false");
    no(NODE, "NODE must be false");
    no(BUN, "BUN must be false");
    no(CLOUDFLARE, "CLOUDFLARE must be false");
    no(BROWSER, "BROWSER must be false");
});
