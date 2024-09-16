import { errorInfo } from "./error_info.js";
/**
 * Represents an error that occurs when a `null` or `undefined` reference is encountered.
 *
 * @example
 * ```ts
 * import { NullReferenceError } from "@bearz/errors/null-reference-error";
 *
 * let user: User | null = null;
 *
 * if (user === null) {
 *   throw new NullReferenceError("User is null.");
 * }
 * ```
 */
export class NullReferenceError extends Error {
    constructor() {
        let message;
        let options;
        if (arguments.length === 1) {
            if (typeof arguments[0] === "string") {
                message = arguments[0];
            }
            else {
                options = arguments[0];
                message = options?.message;
            }
        }
        else {
            options = {};
        }
        super(message ?? "Null reference found.", options);
        this.name = "NullReferenceError";
        this.link =
            options?.link ??
                "https://jsr.io/@bearz/errors/doc/null-reference-error/~/NullReferenceError";
        this.target = options?.target;
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
     * import { NullReferenceError } from "@bearz/errors/null-reference-error";
     *
     * try {
     *    throw new NullReferenceError("User is null.");
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
            stack: this.stack,
            innerError: innerError,
            target: this.target,
            link: this.link,
        };
    }
}
