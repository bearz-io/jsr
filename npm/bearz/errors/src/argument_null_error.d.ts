import type { ArgumentErrorOptions } from "./abstractions.js";
import { ArgumentError } from "./argument_error.js";
/**
 * Represents an error that is thrown when an argument is null or undefined.
 *
 * @example
 * ```ts
 * import { ArgumentNullError } from "@bearz/errors/argument-null-error";
 *
 * function test(name: string) {
 *    if (name === null || name === undefined) {
 *        throw new ArgumentNullError("name");
 *    }
 * }
 *
 * test(null);
 */
export declare class ArgumentNullError extends ArgumentError {
    /**
     * Creates a new instance of the ArgumentNullError class.
     * @param argumentName The name of the invalid argument.
     */
    constructor(argumentName: string);
    /**
     * Creates a new instance of the ArgumentNullError class.
     * @param options The error options.
     */
    constructor(options: ArgumentErrorOptions);
    /**
     * Creates a new instance of the ArgumentNullError class.
     */
    constructor();
}
