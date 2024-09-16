import { ArgumentError } from "./argument_error.js";
/**
 * Represents an error that is thrown when an argument is null or empty.
 *
 * For strings this can be used for checking if a string is null, undefined, empty,
 * or contains only whitespace characters.
 *
 * For arrays this can be used for checking if an array is null, undefined, or empty.
 *
 * @example
 * ```ts
 * import { ArgumentEmptyError } from "@bearz/errors/argument-empty-error";
 *
 * function test(name: string) {
 *     if (name.length === 0) {
 *         throw new ArgumentEmptyError("name");
 *     }
 * }
 *
 * test("");
 * ```
 */
export class ArgumentEmptyError extends ArgumentError {
    constructor() {
        let o;
        const link = "https://jsr.io/@bearz/errors/doc/argument-empty-error/~/ArgumentEmptyError";
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
        o.message ??= `Argument ${o.name} must not be null or empty.`;
        super(o);
        this.name = "ArgumentEmptyError";
    }
}
