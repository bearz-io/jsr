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
export class ArgumentNullError extends ArgumentError {
    constructor() {
        let o;
        const link = "https://jsr.io/@bearz/errors/doc/argument-range-error/~/ArgumentRangeError";
        if (arguments.length === 1) {
            if (typeof arguments[0] === "string") {
                o = { name: arguments[0], link };
            }
            else {
                o = arguments[0];
                o.link ??= link;
            }
        }
        else {
            o = { name: "unknown", link };
        }
        o.message ??= `Argument ${o.name} must not be null.`;
        super(o);
        this.name = "ArgumentNullError";
    }
}
