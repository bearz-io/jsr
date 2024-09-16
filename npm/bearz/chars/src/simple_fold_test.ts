import { ok } from "@bearz/assert";
import { equalFold, simpleFold } from "./simple_fold.js";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const { test } = await import("vitest");

test("chars::simpleFold", () => {
    ok(simpleFold(0x0041) === 0x0061);
    ok(simpleFold(0x0061) === 0x0041);
    ok(simpleFold(0x00b5) === 0x039c);
    ok(simpleFold(0x039c) === 0x03bc);
    ok(simpleFold(0x03bc) === 0x00b5);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
    ok(simpleFold(0x1f600) === 0x1f600);
});

test("chars::equalFold", () => {
    ok(equalFold(0x0041, 0x0061));
    ok(equalFold(0x0061, 0x0041));
    ok(equalFold(0x00b5, 0x039c));
    ok(equalFold(0x039c, 0x03bc));
    ok(equalFold(0x03bc, 0x00b5));
});
