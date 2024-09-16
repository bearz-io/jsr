import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when a `null` or `undefined` reference is encountered.
 *
 * @example
 * ```ts
 * import { NullReferenceError } from "@bearz/errors/null-reference-error";
 *
 * let user: User | null = null;
 *
 * if (user === null) {
 *   throw new NullReferenceError("User is null.");
 * }
 * ```
 */
export declare class NullReferenceError extends Error {
    /**
     * Creates a new instance of the NullReferenceError class.
     * @param message The error message.
     *
     * @example
     * ```ts
     * import { NullReferenceError } from "@bearz/errors/null-reference-error";
     *
     * let user: User | null = null;
     *
     * if (user === null) {
     *    throw new NullReferenceError("User is null.");
     * }
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the NullReferenceError class.
     * @param options The error options.
     *
     * @example
     * ```ts
     * import { NullReferenceError } from "@bearz/errors/null-reference-error";
     *
     * let user: User | null = null;
     * if (user === null) {
     *      throw new NullReferenceError({ message: "User is null.", target: "user" });
     * }
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the NullReferenceError class.
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
     * import { NullReferenceError } from "@bearz/errors/null-reference-error";
     *
     * try {
     *    throw new NullReferenceError("User is null.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
