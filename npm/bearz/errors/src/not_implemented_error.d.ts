import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when a method or
 * functionality is not implemented.
 *
 * @example
 * ```ts
 * import { NotImplementedError } from "@bearz/errors/not-implemented-error";
 *
 * function test() {
 *      throw new NotImplementedError("function test() is not implemented.");
 * }
 *
 * test();
 * ```
 */
export declare class NotImplementedError extends Error {
    /**
     * Creates a new instance of the NotImplementedError class.
     * @param message The error message.
     * @example
     * ```ts
     * import { NotImplementedError } from "@bearz/errors/not-implemented-error";
     *
     * throw new NotImplementedError("Not implemented.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the NotImplementedError class.
     *
     * @param options The error options.
     * @example
     * ```ts
     * import { NotImplementedError } from "@bearz/errors/not-implemented-error";
     *
     * throw new NotImplementedError({ message: "Not implemented.", target: "method" });
     * ```
     */
    constructor(options?: EnhancedErrorOptions);
    /**
     * Creates a new instance of the NotImplementedError class.
     */
    constructor();
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
     * @returns The error as a plain object.
     *
     * @example
     * ```ts
     * import { NotImplementedError } from "@bearz/errors/not-implemented-error";
     *
     * try {
     *    throw new NotImplementedError("Not implemented.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
