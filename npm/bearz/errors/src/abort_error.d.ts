import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when an operation is aborted.
 */
export declare class AbortError extends Error {
    /**
     * Creates a new instance of the AbortError class.
     * @param options The error options.
     * @example
     * ```ts
     * import { AbortError } from "@bearz/errors/abort-error";
     *
     * throw new AbortError({ message: "Operation was aborted.", target: "operation" });
     * ```
     */
    constructor(options?: EnhancedErrorOptions);
    /**
     * Creates a new instance of the AbortError class.
     * @param message The error message.
     * @example
     * ```ts
     * import { AbortError } from "@bearz/errors/abort-error";
     *
     * throw new AbortError("Operation was aborted.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the AbortError class.
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
     * import { AbortError } from "@bearz/errors/abort-error";
     *
     * try {
     *    throw new AbortError("Operation was aborted.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
