import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that is thrown when an assertion fails.
 *
 * @example
 * ```ts
 * import { AssertionError } from "@bearz/errors/assertion-error";
 *
 * function assertExperience(yearsOfExperience: number) {
 *      if (yearsOfExperience < 2)
 *         throw new AssertionError({ message: "years of experience must be 2 or greater", target: "yearsOfExperience" });
 * }
 *
 * assertExperience(1);
 * ```
 */
export declare class AssertionError extends Error {
    /**
     * Creates a new instance of the AssertionError class.
     * @param options The error options.
     * @example
     * ```ts
     * import { AssertionError } from "@bearz/errors/assertion-error";
     *
     * throw new AssertionError({ message: "Assertion failed.", target: "operation" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the AssertionError class.
     * @param message The error message.
     * ```ts
     * import { AssertionError } from "@bearz/errors/assertion-error";
     *
     * throw new AssertionError("Value must be greater than zero.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the AssertionError class.
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
     * import { AssertionError } from "@bearz/errors/assertion-error";
     *
     * try {
     *    throw new AssertionError("Failed assertion.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
