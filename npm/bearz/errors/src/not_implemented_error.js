import { errorInfo } from "./error_info.js";
/**
 * Represents an error that occurs when a method or
 * functionality is not implemented.
 *
 * @example
 * ```ts
 * import { NotImplementedError } from "@bearz/errors/not-implemented-error";
 *
 * function test() {
 *      throw new NotImplementedError("function test() is not implemented.");
 * }
 *
 * test();
 * ```
 */
export class NotImplementedError extends Error {
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
        super(message ?? "Not implemented.", options);
        this.name = "NotImplementedError";
        this.link =
            options?.link ??
                "https://jsr.io/@bearz/errors/doc/not-implemented-error/~/NotImplementedError";
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
     * import { NotImplementedError } from "@bearz/errors/not-implemented-error";
     *
     * try {
     *    throw new NotImplementedError("Not implemented.");
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
