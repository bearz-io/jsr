import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when an invalid cast is attempted.
 *
 * @example
 * ```ts
 * import { InvalidCastError } from "@bearz/errors/invalid-cast-error";
 *
 * const user = new User();
 * const monster = user as Monster;
 *
 * if (!(monster instanceof Monster)) {
 *   throw new InvalidCastError("Invalid of User class to Monster class.");
 * }
 */
export declare class InvalidCastError extends Error {
    /**
     * Creates a new instance of the InvalidCastError class.
     * @param message The error message.
     * @example
     * ```ts
     * import { InvalidCastError } from "@bearz/errors/invalid-cast-error";
     *
     * throw new InvalidCastError("Invalid of User class to Monster class.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the InvalidCastError class.
     * @param options The error options.
     * @example
     * ```ts
     * import { InvalidCastError } from "@bearz/errors/invalid-cast-error";
     *
     * throw new InvalidCastError({ message: "Invalid of User class to Monster class.", target: "user" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the InvalidCastError class.
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
     * import { InvalidCastError } from "@bearz/errors/invalid-cast-error";
     *
     * try {
     *    throw new InvalidCastError("Invalid of User class to Monster class.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
