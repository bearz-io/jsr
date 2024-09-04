/**
 * # @bearz/assert
 * 
 * An opinionated assertion library that wraps the the 
 * Deno standard library's `@std/assert` module or the chai assertion library
 * depending on the package host (jsr or npm).
 * 
 * It is primarily used for testing for various bearz.io modules to make it
 * easier to write tests and switch between testing frameworks (deno test and vitest).
 * 
 * ## Documentation
 * 
 * Documentation is available on [jsr.io](https://jsr.io/@bearz/assert/doc)
 * 
 * ## Usage
 * ```typescript
 * import { equal, ok, no } from "@bearz/assert";
 * 
 * equal(1, 1);
 * ok(true);
 * no(false);
 * 
 * ```
 * 
 * ## License
 * 
 * [MIT License](./LICENSE.md)
 * 
 */

import {
    assert,
    assert as ok,
    assertAlmostEquals as almostEqual,
    assertArrayIncludes as arrayIncludes,
    assertEquals as equal,
    assertExists as exists,
    assertFalse as falsy,
    assertFalse as no,
    assertGreater as greater,
    assertGreaterOrEqual as greaterOrEqual,
    assertInstanceOf as instanceOf,
    assertIsError as isError,
    assertLess as less,
    assertLessOrEqual as lessOrEqual,
    assertMatch as match,
    assertNotEquals as notEqual,
    assertNotInstanceOf as notInstanceOf,
    assertNotMatch as notMatch,
    assertNotStrictEquals as notStrictEqual,
    assertObjectMatch as objectMatch,
    assertRejects as rejects,
    assertStrictEquals as strictEqual,
    assertStringIncludes as stringIncludes,
    assertThrows as throws,
    fail,
    unimplemented,
    unreachable,
} from "@std/assert";

export {
    almostEqual,
    arrayIncludes,
    assert,
    equal,
    exists,
    fail,
    falsy,
    greater,
    greaterOrEqual,
    instanceOf,
    isError,
    less,
    lessOrEqual,
    match,
    no,
    notEqual,
    notInstanceOf,
    notMatch,
    notStrictEqual,
    objectMatch,
    ok,
    rejects,
    strictEqual,
    stringIncludes,
    throws,
    unimplemented,
    unreachable,
};

export default {
    ok,
    falsy,
    equal,
    notEqual,
    strictEqual,
    throws,
    match,
    notMatch,
    exists,
    instanceOf,
    arrayIncludes,
    almostEqual,
    greater,
    greaterOrEqual,
    less,
    lessOrEqual,
    objectMatch,
    stringIncludes,
    notInstanceOf,
    notStrictEqual,
    isError,
    fail,
    rejects,
    unimplemented,
    unreachable,
};