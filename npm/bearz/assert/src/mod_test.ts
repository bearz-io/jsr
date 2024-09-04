import { equal } from "./mod.js";

// TESTDEF: do not remove.
// This line is used by automation to conver to
// other test frameworks
const { test } = await import("vitest");

test("assert::equal", () => {
    equal(true, true);
});
