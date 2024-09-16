import { errorInfo } from "./error_info.js";
/**
 * Represents an error that occurs when an invalid argument
 * is passed to a function or method.
 *
 * @example
 * ```ts
 * import { ArgumentError } from "@bearz/errors/argument-error.";
 *
 * function test(name: string) {
 *  if (name === null || name === undefined) {
 *     throw new ArgumentError("name");
 *  }
 * }
 *
 * test(null);
 * ```
 */
export class ArgumentError extends Error {
    constructor() {
        let o;
        if (arguments.length === 1) {
            if (typeof arguments[0] === "string") {
                o = { name: arguments[0] };
            }
            else {
                o = arguments[0];
            }
        }
        else {
            o = { name: "unknown" };
        }
        super(o.message ?? `Argument ${o.name} is invalid.`, o);
        this.name = "ArgumentNullError";
        this.argumentName = o.name;
        this.target = o.target;
        this.link = o.link ?? "https://jsr.io/@bearz/errors/doc/argument-error/~/ArgumentError";
    }
    /**
     * The name of the invalid argument.
     */
    argumentName;
    /**
     * A descriptor for associated target for the error.
     */
    target;
    /**
     * A link to help documentation.
     */
    link;
    /**
     * Converts the error to an object that can be serialized.
     *
     * @returns The error as a plain object.
     * @example
     * ```ts
     * import { ArgumentError } from "@bearz/errors/argument-error.";
     *
     * try {
     *     throw new ArgumentError("name");
     * } catch (e) {
     *     console.log(e.toObject());
     * }
     * ```
     */
    toObject() {
        const e = this.cause;
        const innerError = e instanceof Error ? errorInfo(e) : undefined;
        return {
            message: this.message,
            code: this.name,
            name: this.argumentName,
            target: this.target,
            link: this.link,
            innerError: innerError,
        };
    }
}
