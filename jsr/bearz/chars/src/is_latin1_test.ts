import { ok } from "@bearz/assert";
import { isLatin1, isLatin1At } from "./is_latin1.ts";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const test = Deno.test;

test("chars::isLatin1", () => {
    ok(isLatin1(65));
    ok(isLatin1(0));
    ok(isLatin1(127));
    ok(isLatin1(128));
    ok(isLatin1(255));
    ok(!isLatin1(256));
    ok(!isLatin1(-1));
    ok(!isLatin1(-128));
    ok(!isLatin1(-255));
    ok(!isLatin1(-256));
    ok(!isLatin1(Number.POSITIVE_INFINITY));
    ok(!isLatin1(Number.NEGATIVE_INFINITY));
    ok(!isLatin1(Number.NaN));
    ok(!isLatin1(0.1));
    ok(!isLatin1(-0.1));
    ok(!isLatin1(0.9));
    ok(!isLatin1(-0.9));
    ok(!isLatin1(1.1));
    ok(!isLatin1(-1.1));
    ok(!isLatin1(1.9));
    ok(!isLatin1(-1.9));
    ok(isLatin1(1.0));
    ok(!isLatin1(-1.0));
    ok(isLatin1(0.0));
    ok(isLatin1(-0.0));
    ok(!isLatin1(0.0000000000001));
    ok(!isLatin1(-0.0000000000001));
    ok(!isLatin1(0.0000000000009));
    ok(!isLatin1(-0.0000000000009));
    ok(!isLatin1(0.0000000000011));
    ok(!isLatin1(-0.0000000000011));
    ok(!isLatin1(0.0000000000019));
    ok(!isLatin1(-0.0000000000019));
    ok(isLatin1(0.0000000000000));
    ok(isLatin1(-0.0000000000000));
});

test("chars::isLatin1At", () => {
    const str = "Holy 💩";
    ok(isLatin1At(str, 0));
    ok(isLatin1At(str, 1));
    ok(isLatin1At(str, 2));
    ok(isLatin1At(str, 3));
    ok(isLatin1At(str, 4));
    ok(!isLatin1At(str, 5));
});
