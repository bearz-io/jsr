import { ok } from "@bearz/assert";
import { isControl, isControlAt, isControlUnsafe } from "./is_control.ts";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const test = Deno.test;

test("chars::isControl", () => {
    ok(!isControl(0x10FFFF));
    ok(!isControl(0.32));
    ok(isControl(10));
    ok(isControl(0));
    ok(isControl(31));
    ok(isControl(127));
    ok(isControl(128));
    ok(!isControl(255));
    ok(!isControl(256));
    ok(!isControl(-1));
    ok(!isControl(-128));
    ok(!isControl(-255));
    ok(!isControl(-256));
    ok(!isControl(Number.POSITIVE_INFINITY));
    ok(!isControl(Number.NEGATIVE_INFINITY));
    ok(!isControl(Number.NaN));
    ok(!isControl(0.1));
    ok(!isControl(-0.1));
    ok(!isControl(0.9));
    ok(!isControl(-0.9));
    ok(!isControl(1.1));
    ok(!isControl(-1.1));
    ok(!isControl(1.9));
    ok(!isControl(-1.9));
    ok(isControl(1.0));
    ok(!isControl(-1.0));
    ok(isControl(0.0));
    ok(isControl(-0.0));
    ok(!isControl(0.0000000000001));
    ok(!isControl(-0.0000000000001));
    ok(!isControl(0.0000000000009));
    ok(!isControl(-0.0000000000009));
    ok(!isControl(0.0000000000011));
    ok(!isControl(-0.0000000000011));
    ok(!isControl(0.0000000000019));
    ok(!isControl(-0.0000000000019));
    ok(isControl(0.0000000000000));
    ok(isControl(-0.0000000000000));
});

test("chars::isControlUnsafe", () => {
    ok(!isControlUnsafe(0x10FFFF));
    ok(!isControlUnsafe(0.32));
    ok(isControlUnsafe(10));
    ok(isControlUnsafe(0));
    ok(isControlUnsafe(31));
    ok(isControlUnsafe(127));
    ok(isControlUnsafe(128));
    ok(!isControlUnsafe(255));
    ok(!isControlUnsafe(256));
    ok(!isControlUnsafe(-1));
    ok(!isControlUnsafe(-128));
    ok(!isControlUnsafe(-255));
    ok(!isControlUnsafe(-256));
    ok(!isControlUnsafe(Number.POSITIVE_INFINITY));
    ok(!isControlUnsafe(Number.NEGATIVE_INFINITY));
    ok(!isControlUnsafe(Number.NaN));
    ok(!isControlUnsafe(0.1));
    ok(!isControlUnsafe(-0.1));
    ok(!isControlUnsafe(0.9));
    ok(!isControlUnsafe(-0.9));
    ok(!isControlUnsafe(1.1));
    ok(!isControlUnsafe(-1.1));
    ok(!isControlUnsafe(1.9));
    ok(!isControlUnsafe(-1.9));
    ok(isControlUnsafe(1.0));
    ok(!isControlUnsafe(-1.0));
    ok(isControlUnsafe(0.0));
    ok(isControlUnsafe(-0.0));
    ok(!isControlUnsafe(0.0000000000001));
    ok(!isControlUnsafe(-0.0000000000001));
    ok(!isControlUnsafe(0.0000000000009));
    ok(!isControlUnsafe(-0.0000000000009));
    ok(!isControlUnsafe(0.0000000000011));
    ok(!isControlUnsafe(-0.0000000000011));
    ok(!isControlUnsafe(0.0000000000019));
    ok(!isControlUnsafe(-0.0000000000019));
    ok(isControlUnsafe(0.0000000000000));
    ok(isControlUnsafe(-0.0000000000000));
});

test("chars::isControlAt", () => {
    const str = "Holy 💩\n\t";
    ok(!isControlAt(str, 0));
    ok(!isControlAt(str, 1));
    ok(!isControlAt(str, 2));
    ok(!isControlAt(str, 3));
    ok(!isControlAt(str, 4));
    ok(!isControlAt(str, 5)); // 💩
    ok(!isControlAt(str, 6)); // 💩
    ok(isControlAt(str, 7));
    ok(isControlAt(str, 8));
});
