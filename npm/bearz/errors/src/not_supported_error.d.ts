import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when an operation is not supported.
 *
 * @example
 * ```ts
 * import { NotSupportedError } from "@bearz/errors/not-supported-error";
 *
 * let isWindows = false;
 * // check if os is windows
 * function test() {
 *      if (!isWindows) {
 *          throw new NotSupportedError("Operation is not supported on this platform. Only windows is suppored");}
 *      }
 * }
 *
 * test();
 */
export declare class NotSupportedError extends Error {
    /**
     * Creates a new instance of the NotSupportedError class.
     * @param message The error message.
     *
     * @example
     * ```ts
     * import { NotSupportedError } from "@bearz/errors/not-supported-error";
     *
     * throw new NotSupportedError("Operation is not supported.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the NotSupportedError class.
     * @param options The error options.
     *
     * @example
     * ```ts
     * import { NotSupportedError } from "@bearz/errors/not-supported-error";
     *
     * throw new NotSupportedError({ message: "Operation is not supported.", target: "operation" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the NotSupportedError class.
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
     * import { NotSupportedError } from "@bearz/errors/not-supported-error";
     *
     * try {
     *    throw new NotSupportedError("Operation is not supported.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
