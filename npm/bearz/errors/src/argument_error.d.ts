import type { ArgumentErrorInfo, ArgumentErrorOptions } from "./abstractions.js";
/**
 * Represents an error that occurs when an invalid argument
 * is passed to a function or method.
 *
 * @example
 * ```ts
 * import { ArgumentError } from "@bearz/errors/argument-error.";
 *
 * function test(name: string) {
 *  if (name === null || name === undefined) {
 *     throw new ArgumentError("name");
 *  }
 * }
 *
 * test(null);
 * ```
 */
export declare class ArgumentError extends Error {
    /**
     * Creates a new instance of the ArgumentError class.
     * @param argumentName The name of the invalid argument.
     *
     * @example
     * ```ts
     * import { ArgumentError } from "@bearz/errors/argument-error.";
     *
     * function test(name: string) {
     *  if (name === null || name === undefined) {
     *     throw new ArgumentError("name");
     *  }
     * }
     *
     * test(null);
     */
    constructor(argumentName: string);
    /**
     * Creates a new instance of the ArgumentError class.
     * @param options The error options.
     * ```ts
     * import { ArgumentError } from "@bearz/errors/argument-error.";
     *
     * function test(name: string) {
     *  if (name === null || name === undefined) {
     *     throw new ArgumentError({ name: "name", message: "Name must not be null." });
     *  }
     * }
     *
     * test(null);
     */
    constructor(options?: ArgumentErrorOptions);
    /**
     * Creates a new instance of the ArgumentError class.
     */
    constructor();
    /**
     * The name of the invalid argument.
     */
    argumentName: string;
    /**
     * A descriptor for associated target for the error.
     */
    target?: string;
    /**
     * A link to help documentation.
     */
    link?: string;
    /**
     * Converts the error to an object that can be serialized.
     *
     * @returns The error as a plain object.
     * @example
     * ```ts
     * import { ArgumentError } from "@bearz/errors/argument-error.";
     *
     * try {
     *     throw new ArgumentError("name");
     * } catch (e) {
     *     console.log(e.toObject());
     * }
     * ```
     */
    toObject(): ArgumentErrorInfo;
}
