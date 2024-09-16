import { ok } from "@bearz/assert";
import { toUpper } from "./to_upper.js";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const { test } = await import("vitest");

test("chars::toUpper", () => {
    ok(toUpper(0x0041) === 0x0041);
    ok(toUpper(0x0061) === 0x0041);
    ok(toUpper(0x00b5) === 0x039c);
    ok(toUpper(0x039c) === 0x039c);
    ok(toUpper(0x03bc) === 0x039c);
    ok(toUpper(0x1f600) === 0x1f600);
});
