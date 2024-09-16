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
export class ArgumentRangeError extends ArgumentError {
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
    constructor() {
        let o: ArgumentRangeErrorOptions;
        let value: unknown | undefined;
        const link = "https://jsr.io/@bearz/errors/doc/argument-range-error/~/ArgumentRangeError";

        if (arguments.length === 2) {
            o = { name: arguments[0], link };
            value = arguments[1];
        } else if (arguments.length === 1) {
            if (typeof arguments[0] === "string") {
                o = { name: arguments[0], value: undefined, link };
            } else {
                o = arguments[0];
                o.link ??= link;
            }
        } else {
            o = { name: "unknown", value: undefined };
        }
        o.message ??= `Argument ${o.name} out of range.`;
        super(o);
        this.name = "ArgumentRangeError";
        this.value = value;
    }

    value?: unknown;
}
