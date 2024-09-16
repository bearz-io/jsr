import { ok } from "@bearz/assert";
import { isLetter, isLetterAt } from "./is_letter.js";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const { test } = await import("vitest");

test("chars::isLetter", () => {
    ok(!isLetter(0x10ffff));
    ok(!isLetter(0.32));
    ok(isLetter(65));
    ok(isLetter(97));
    ok(!isLetter(0));
    ok(!isLetter(31));
    ok(!isLetter(127));
    ok(!isLetter(128));
    ok(isLetter(255));
    ok(isLetter(256));
    ok(isLetter(228));
    ok(isLetter(0x0860));
    ok(isLetter(0x11144));
    ok(!isLetter(-1));
    ok(!isLetter(-128));
    ok(!isLetter(-255));
    ok(!isLetter(-256));
    ok(!isLetter(Number.POSITIVE_INFINITY));
    ok(!isLetter(Number.NEGATIVE_INFINITY));
    ok(!isLetter(Number.NaN));
    ok(!isLetter(0.1));
    ok(!isLetter(-0.1));
    ok(!isLetter(0.9));
    ok(!isLetter(-0.9));
    ok(!isLetter(1.1));
    ok(!isLetter(-1.1));
    ok(!isLetter(1.9));
    ok(!isLetter(-1.9));
    ok(!isLetter(1.0));
    ok(!isLetter(-1.0));
    ok(!isLetter(0.0));
    ok(!isLetter(-0.0));
    ok(!isLetter(0.0000000000001));
    ok(!isLetter(-0.0000000000001));
    ok(!isLetter(0.0000000000009));
    ok(!isLetter(-0.0000000000009));
    ok(!isLetter(0.0000000000011));
    ok(!isLetter(-0.0000000000011));
    ok(!isLetter(0.0000000000019));
    ok(!isLetter(-0.0000000000019));
    ok(!isLetter(0.0));
    ok(!isLetter(-0.0));
});

test("chars::isLetterAt", () => {
    const str = "ŸŰ\n0";
    ok(isLetterAt(str, 0));
    ok(isLetterAt(str, 1));
    ok(!isLetterAt(str, 2));
    ok(!isLetterAt(str, 3));
});
