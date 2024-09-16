import { ok } from "@bearz/assert";
import { toLower } from "./to_lower.js";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const { test } = await import("vitest");

test("chars::toLower", () => {
    ok(toLower(0x0041) === 0x0061);
    ok(toLower(0x0061) === 0x0061);
    ok(toLower(0x00b5) === 0x00b5);
    ok(toLower(0x039c) === 0x03bc);
    ok(toLower(0x03bc) === 0x03bc);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
    ok(toLower(0x1f600) === 0x1f600);
});
