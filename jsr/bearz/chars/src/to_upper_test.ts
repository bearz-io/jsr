import { ok } from "@bearz/assert";
import { toUpper } from "./to_upper.ts";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const test = Deno.test;

test("chars::toUpper", () => {
    ok(toUpper(0x0041) === 0x0041);
    ok(toUpper(0x0061) === 0x0041);
    ok(toUpper(0x00B5) === 0x039C);
    ok(toUpper(0x039C) === 0x039C);
    ok(toUpper(0x03BC) === 0x039C);
    ok(toUpper(0x1F600) === 0x1F600);
});
