import { errorInfo } from "./error_info.js";
/**
 * Represents an error that occurs when an operation is aborted.
 */
export class AbortError extends Error {
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
        super(message ?? "Operation aborted.", options);
        this.name = "AbortError";
        this.link = options?.link ?? "https://jsr.io/@bearz/errors/doc/abort-error/~/AbortError";
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
     * import { AbortError } from "@bearz/errors/abort-error";
     *
     * try {
     *    throw new AbortError("Operation was aborted.");
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
            code: this.name,
            message: this.message,
            target: this.target,
            link: this.link,
            stack: this.stack,
            innerError: innerError,
        };
    }
}
