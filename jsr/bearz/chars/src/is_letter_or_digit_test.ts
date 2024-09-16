import { ok } from "@bearz/assert";
import { isLetterOrDigit, isLetterOrDigitAt } from "./is_letter_or_digit.ts";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const test = Deno.test;

test("chars::isLetterOrDigit", () => {
    ok(!isLetterOrDigit(0x10FFFF));
    ok(!isLetterOrDigit(0.32));
    ok(isLetterOrDigit(48));
    ok(isLetterOrDigit(65));
    ok(isLetterOrDigit(97));
    ok(!isLetterOrDigit(0));
    ok(!isLetterOrDigit(31));
});

test("chars::isLetterOrDigitAt", () => {
    const str = "Hello 123!";
    ok(isLetterOrDigitAt(str, 0));
    ok(isLetterOrDigitAt(str, 1));
    ok(!isLetterOrDigitAt(str, 5));
    ok(isLetterOrDigitAt(str, 7));
});
