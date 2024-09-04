declare const equal: <T>(actual: T, expected: T, message?: string) => void,
    ok: (value: unknown, message?: string) => asserts value,
    notOk: <T>(value: T, message?: string) => void,
    throws: {
        (fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string): void;
        (
            fn: () => void,
            errorLike?: Chai.ErrorConstructor | Error | null,
            errMsgMatcher?: RegExp | string | null,
            message?: string,
        ): void;
    },
    fail: {
        (message?: string): never;
        <T>(actual: T, expected: T, message?: string, operator?: Chai.Operator): never;
    },
    exists: <T>(value: T, message?: string) => asserts value is NonNullable<T>,
    strictEqual: <T>(actual: T, expected: T, message?: string) => void,
    notEqual: <T>(actual: T, expected: T, message?: string) => void,
    notStrictEqual: <T>(actual: T, expected: T, message?: string) => void,
    match: (value: string, regexp: RegExp, message?: string) => void,
    notMatch: (expected: any, regexp: RegExp, message?: string) => void,
    instanceOf: <T>(
        value: unknown,
        constructor: Chai.Constructor<T>,
        message?: string,
    ) => asserts value is T,
    notInstanceOf: <T, U>(
        value: T,
        type: Chai.Constructor<U>,
        message?: string,
    ) => asserts value is Exclude<T, U>;
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
declare function unreachable(msg?: string): never;
declare function arrayIncludes(actual: any[], expected: any[], msg?: string): void;
declare function stringIncludes(actual: string, expected: string, msg?: string): void;
declare function almostEqual(actual: number, expected: number, delta: number, msg?: string): void;
declare function objectMatch(actual: any, expected: any, msg?: string): void;
declare function less(actual: number, expected: number, msg?: string): void;
declare function lessOrEqual(actual: number, expected: number, msg?: string): void;
declare function greater(actual: number, expected: number, msg?: string): void;
declare function greaterOrEqual(actual: number, expected: number, msg?: string): void;
declare const no: <T>(value: T, message?: string) => void;
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
declare function isError<E extends Error = Error>(
    error: unknown,
    ErrorClass?: new (...args: any[]) => E,
    msgMatches?: string | RegExp,
    msg?: string,
): asserts error is E;
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
declare function unimplemented(msg?: string): never;
/**
 * Executes a function which returns a promise, expecting it to reject.
 *
 * To assert that a synchronous function throws, use {@linkcode assertThrows}.
 *
 * @example Usage
 * ```ts no-eval
 * import { assertRejects } from "@std/assert";
 *
 * await assertRejects(async () => Promise.reject(new Error())); // Doesn't throw
 * await assertRejects(async () => console.log("Hello world")); // Throws
 * ```
 *
 * @param fn The function to execute.
 * @param msg The optional message to display if the assertion fails.
 * @returns The promise which resolves to the thrown error.
 */
declare function rejects(fn: () => PromiseLike<unknown>, msg?: string): Promise<unknown>;
/**
 * Executes a function which returns a promise, expecting it to reject.
 * If it does not, then it throws. An error class and a string that should be
 * included in the error message can also be asserted.
 *
 * To assert that a synchronous function throws, use {@linkcode assertThrows}.
 *
 * @example Usage
 * ```ts no-eval
 * import { assertRejects } from "@std/assert";
 *
 * await assertRejects(async () => Promise.reject(new Error()), Error); // Doesn't throw
 * await assertRejects(async () => Promise.reject(new Error()), SyntaxError); // Throws
 * ```
 *
 * @typeParam E The error class to assert.
 * @param fn The function to execute.
 * @param ErrorClass The error class to assert.
 * @param msgIncludes The string that should be included in the error message.
 * @param msg The optional message to display if the assertion fails.
 * @returns The promise which resolves to the thrown error.
 */
declare function rejects<E extends Error = Error>(
    fn: () => PromiseLike<unknown>,
    ErrorClass: new (...args: any[]) => E,
    msgIncludes?: string,
    msg?: string,
): Promise<E>;
export {
    almostEqual,
    arrayIncludes,
    ok as assert,
    equal,
    exists,
    fail,
    notOk as falsy,
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
declare const _default: {
    ok: (value: unknown, message?: string) => asserts value;
    falsy: <T>(value: T, message?: string) => void;
    equal: <T>(actual: T, expected: T, message?: string) => void;
    notEqual: <T>(actual: T, expected: T, message?: string) => void;
    strictEqual: <T>(actual: T, expected: T, message?: string) => void;
    throws: {
        (fn: () => void, errMsgMatcher?: RegExp | string, ignored?: any, message?: string): void;
        (
            fn: () => void,
            errorLike?: Chai.ErrorConstructor | Error | null,
            errMsgMatcher?: RegExp | string | null,
            message?: string,
        ): void;
    };
    match: (value: string, regexp: RegExp, message?: string) => void;
    notMatch: (expected: any, regexp: RegExp, message?: string) => void;
    exists: <T>(value: T, message?: string) => asserts value is NonNullable<T>;
    instanceOf: <T>(
        value: unknown,
        constructor: Chai.Constructor<T>,
        message?: string,
    ) => asserts value is T;
    arrayIncludes: typeof arrayIncludes;
    almostEqual: typeof almostEqual;
    greater: typeof greater;
    greaterOrEqual: typeof greaterOrEqual;
    less: typeof less;
    lessOrEqual: typeof lessOrEqual;
    objectMatch: typeof objectMatch;
    stringIncludes: typeof stringIncludes;
    notInstanceOf: <T, U>(
        value: T,
        type: Chai.Constructor<U>,
        message?: string,
    ) => asserts value is Exclude<T, U>;
    notStrictEqual: <T>(actual: T, expected: T, message?: string) => void;
    isError: typeof isError;
    fail: {
        (message?: string): never;
        <T>(actual: T, expected: T, message?: string, operator?: Chai.Operator): never;
    };
    rejects: typeof rejects;
    unimplemented: typeof unimplemented;
    unreachable: typeof unreachable;
};
export default _default;
