import { ok } from "@bearz/assert";
import { isChar } from "./is_char.ts";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const test = Deno.test;

test("chars::isChar", () => {
    ok(isChar(0x1F600));
    ok(!isChar(0x110000));
    ok(isChar(0x10FFFF));
    ok(!isChar(0.32));
    ok(isChar(0.0));
    ok(isChar(-0.0));
    ok(!isChar(0.0000000000001));
    ok(isChar(1.0));
});
