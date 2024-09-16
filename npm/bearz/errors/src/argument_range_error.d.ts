import type { ArgumentRangeErrorOptions } from "./abstractions.js";
import { ArgumentError } from "./argument_error.js";
/**
 * Represents an error that occurs when an argument is out of range.
 * @extends ArgumentError
 *
 * @example
 * ```ts
 * import { ArgumentRangeError } from "@bearz/errors/argument-range-error";
 *
 * function test(value: number) {
 *     if (value < 0 || value > 100) {
 *          throw new ArgumentRangeError({ name: "value", value, message: "Argument 'value' must be between 0 and 100." });
 *     }
 * }
 *
 0a* test(-1);
 */
export declare class ArgumentRangeError extends ArgumentError {
    /**
     * Creates a new instance of the ArgumentRangeError class.
     * @param argumentName The name of the argument.
     * @param value The value of the argument.
     *
     * @example
     * ```ts
     * import { ArgumentRangeError } from "@bearz/errors/argument-range-error";
     *
     * function test(value: number) {
     *      if (value < 0 || value > 100) {
     *         throw new ArgumentRangeError("value", value);
     *      }
     * }
     *
     * test(-1);
     */
    constructor(argumentName: string, value?: unknown);
    /**
     * Creates a new instance of the ArgumentRangeError class.
     * @param options The error options.
     *
     * @example
     * ```ts
     * import { ArgumentRangeError } from "@bearz/errors/argument-range-error";
     *
     * function test(value: number) {
     *     if (value < 0 || value > 100) {
     *          throw new ArgumentRangeError({ name: "value", value, message: "Argument 'value' must be between 0 and 100." });
     *     }
     * }
     *
     * test(-1);
     */
    constructor(options: ArgumentRangeErrorOptions);
    /**
     * Creates a new instance of the ArgumentRangeError class.
     */
    constructor();
    value?: unknown;
}
