import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when an operation times out.
 *
 * @example
 * ```ts
 * import { TimeoutError } from "@bearz/errors/timeout-error";
 *
 * var controller = new AbortController();
 * var signal = controller.signal;
 *
 * setTimeout(() => {
 *  controller.abort(new TimeoutError("Operation timed out."));
 * }, 3000);
 *
 * // later in the code0
 *
 * if (signal.aborted) {
 *      console.log(signal.reason);
 * }
 * ```
 */
export declare class TimeoutError extends Error {
    /**
     * Creates a new instance of the TimeoutError class.
     * @param message The error message.
     *
     * @example
     * ```ts
     * import { TimeoutError } from "@bearz/errors/timeout-error";
     *
     * throw new TimeoutError("Operation timed out.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the TimeoutError class.
     * @param options The error options.
     *
     * @example
     * ```ts
     * import { TimeoutError } from "@bearz/errors/timeout-error";
     *
     * throw new TimeoutError({ message: "Operation timed out.", target: "operation" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the TimeoutError class.
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
     * import { TimeoutError } from "@bearz/errors/timeout-error";
     *
     * try {
     *    throw new TimeoutError("Operation timed out.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
