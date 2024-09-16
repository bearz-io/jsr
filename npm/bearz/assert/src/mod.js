import { assert, AssertionError } from "chai";
const { equal, closeTo, ok, notOk, isBelow, isAbove, isAtLeast, isAtMost, throws, deepOwnInclude, fail, exists, strictEqual, notEqual, notStrictEqual, match, notMatch, instanceOf, notInstanceOf, include, includeDeepMembers, } = assert;
/**
 * Use this to assert unreachable code.
 *
 * @example Usage
 * ```ts no-eval
 * import { unreachable } from "@std/assert";
 *
 * unreachable(); // Throws
 * ```
 *
 * @param msg Optional message to include in the error.
 * @returns Never returns, always throws.
 */
function unreachable(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new AssertionError(`Unreachable${msgSuffix}`);
}
// biome-ignore lint/suspicious/noExplicitAny: false positive
function arrayIncludes(actual, expected, msg) {
    return include(actual, expected, msg);
}
function stringIncludes(actual, expected, msg) {
    return include(actual, expected, msg);
}
function almostEqual(actual, expected, delta, msg) {
    return closeTo(actual, expected, delta, msg);
}
// biome-ignore lint/suspicious/noExplicitAny: false positive
function objectMatch(actual, expected, msg) {
    return deepOwnInclude(actual, expected, msg);
}
function less(actual, expected, msg) {
    return isBelow(actual, expected, msg);
}
function lessOrEqual(actual, expected, msg) {
    return isAtMost(actual, expected, msg);
}
function greater(actual, expected, msg) {
    return isAbove(actual, expected, msg);
}
function greaterOrEqual(actual, expected, msg) {
    return isAtLeast(actual, expected, msg);
}
const no = notOk;
const falsy = no;
// https://github.com/chalk/ansi-regex/blob/02fa893d619d3da85411acc8fd4e2eea0e95a9d9/index.js
const ANSI_PATTERN = new RegExp([
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))",
].join("|"), "g");
/**
 * Remove ANSI escape codes from the string.
 *
 * @param string Text to remove ANSI escape codes from
 *
 * @returns Text without ANSI escape codes
 *
 * @example Usage
 * ```ts no-assert
 * import { red, stripAnsiCode } from "@std/internal/styles";
 *
 * console.log(stripAnsiCode(red("Hello, world!"))); // Prints "Hello, world!"
 * ```
 */
function stripAnsiCode(string) {
    return string.replace(ANSI_PATTERN, "");
}
/**
 * Make an assertion that `error` is an `Error`.
 * If not then an error will be thrown.
 * An error class and a string that should be included in the
 * error message can also be asserted.
 *
 * @example Usage
 * ```ts no-eval
 * import { assertIsError } from "@std/assert";
 *
 * assertIsError(null); // Throws
 * assertIsError(new RangeError("Out of range")); // Doesn't throw
 * assertIsError(new RangeError("Out of range"), SyntaxError); // Throws
 * assertIsError(new RangeError("Out of range"), SyntaxError, "Out of range"); // Doesn't throw
 * assertIsError(new RangeError("Out of range"), SyntaxError, "Within range"); // Throws
 * ```
 *
 * @typeParam E The type of the error to assert.
 * @param error The error to assert.
 * @param ErrorClass The optional error class to assert.
 * @param msgMatches The optional string or RegExp to assert in the error message.
 * @param msg The optional message to display if the assertion fails.
 */
function isError(error, 
// deno-lint-ignore no-explicit-
// biome-ignore lint/suspicious/noExplicitAny: false positive
ErrorClass, msgMatches, msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    if (!(error instanceof Error)) {
        throw new AssertionError(`Expected "error" to be an Error object${msgSuffix}}`);
    }
    if (ErrorClass && !(error instanceof ErrorClass)) {
        msg = `Expected error to be instance of "${ErrorClass.name}", but was "${error?.constructor?.name}"${msgSuffix}`;
        throw new AssertionError(msg);
    }
    // biome-ignore lint/suspicious/noImplicitAnyLet:
    let msgCheck;
    if (typeof msgMatches === "string") {
        msgCheck = stripAnsiCode(error.message).includes(stripAnsiCode(msgMatches));
    }
    if (msgMatches instanceof RegExp) {
        msgCheck = msgMatches.test(stripAnsiCode(error.message));
    }
    if (msgMatches && !msgCheck) {
        msg = `Expected error message to include ${msgMatches instanceof RegExp ? msgMatches.toString() : JSON.stringify(msgMatches)}, but got ${JSON.stringify(error?.message)}${msgSuffix}`;
        throw new AssertionError(msg);
    }
}
/**
 * Use this to stub out methods that will throw when invoked.
 *
 * @example Usage
 * ```ts no-eval
 * import { unimplemented } from "@std/assert";
 *
 * unimplemented(); // Throws
 * ```
 *
 * @param msg Optional message to include in the error.
 * @returns Never returns, always throws.
 */
function unimplemented(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new AssertionError(`Unimplemented${msgSuffix}`);
}
async function rejects(fn, errorClassOrMsg, msgIncludesOrMsg, msg) {
    // deno-lint-ignore no-explicit-
    // biome-ignore lint/suspicious/noExplicitAny: false positive
    let ErrorClass = undefined;
    let msgIncludes = undefined;
    // biome-ignore lint/suspicious/noImplicitAnyLet:
    let err;
    if (typeof errorClassOrMsg !== "string") {
        if (errorClassOrMsg === undefined ||
            errorClassOrMsg.prototype instanceof Error ||
            errorClassOrMsg.prototype === Error.prototype) {
            // deno-lint-ignore no-explicit-any
            // biome-ignore lint/suspicious/noExplicitAny: false positive
            ErrorClass = errorClassOrMsg;
            msgIncludes = msgIncludesOrMsg;
        }
    }
    else {
        msg = errorClassOrMsg;
    }
    let doesThrow = false;
    let isPromiseReturned = false;
    const msgSuffix = msg ? `: ${msg}` : ".";
    try {
        const possiblePromise = fn();
        if (possiblePromise &&
            typeof possiblePromise === "object" &&
            typeof possiblePromise.then === "function") {
            isPromiseReturned = true;
            await possiblePromise;
        }
        else {
            throw Error();
        }
    }
    catch (error) {
        if (!isPromiseReturned) {
            throw new AssertionError(`Function throws when expected to reject${msgSuffix}`);
        }
        if (ErrorClass) {
            if (!(error instanceof Error)) {
                throw new AssertionError(`A non-Error object was rejected${msgSuffix}`);
            }
            isError(error, ErrorClass, msgIncludes, msg);
        }
        err = error;
        doesThrow = true;
    }
    if (!doesThrow) {
        throw new AssertionError(`Expected function to reject${msgSuffix}`);
    }
    return err;
}
export { almostEqual, arrayIncludes, ok as assert, equal, exists, fail, notOk as falsy, greater, greaterOrEqual, instanceOf, isError, less, lessOrEqual, match, no, notEqual, notInstanceOf, notMatch, notStrictEqual, objectMatch, ok, rejects, strictEqual, stringIncludes, throws, unimplemented, unreachable, };
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
