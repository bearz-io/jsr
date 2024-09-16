import { errorInfo } from "./error_info.js";
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
export class AssertionError extends Error {
    constructor() {
        let o;
        if (arguments.length === 1) {
            if (typeof arguments[0] === "string") {
                o = { message: arguments[0] };
            }
            else {
                o = arguments[0];
            }
        }
        else {
            o = {};
        }
        o.message ??= "Assertion failed.";
        super(o.message, o);
        this.name = "AssertionError";
        this.link = o.link ?? "https://jsr.io/@bearz/errors/doc/assertion-error/~/AssertionError";
        this.target = o.target;
    }
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
    toObject() {
        let innerError = undefined;
        if (this.cause instanceof Error) {
            innerError = errorInfo(this.cause);
        }
        return {
            message: this.message,
            code: this.name,
            target: this.target,
            link: this.link,
            innerError: innerError,
        };
    }
}
