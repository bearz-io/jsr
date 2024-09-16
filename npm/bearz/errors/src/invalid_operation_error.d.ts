import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when an invalid operation is performed.
 *
 * @example
 * ```ts
 * import { InvalidOperationError } from "@bearz/errors/invalid-operation-error";
 *
 * function test(isInBadState: boolean) {
 *      if (isInBadState) {
 *          throw new InvalidOperationError({ message: "Operation is invalid.", target: "test" });
 *      }
 * }
 *
 * test(true);
 */
export declare class InvalidOperationError extends Error {
    /**
     * Creates a new instance of the InvalidOperationError class.
     * @param message The error message.
     *
     * @example
     * ```ts
     * import { InvalidOperationError } from "@bearz/errors/invalid-operation-error";
     *
     * throw new InvalidOperationError("Operation is invalid.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the InvalidOperationError class.
     * @param options The error options.
     *
     * @example
     * ```ts
     * import { InvalidOperationError } from "@bearz/errors/invalid-operation-error";
     *
     * function test(isInBadState: boolean) {
     *      if (isInBadState) {
     *          throw new InvalidOperationError({ message: "Operation is invalid.", target: "test" });
     *      }
     * }
     *
     * test(true);
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the InvalidOperationError class.
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
     * import { InvalidOperationError } from "@bearz/errors/invalid-operation-error";
     *
     * try {
     *    throw new InvalidOperationError("Operation is invalid.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
