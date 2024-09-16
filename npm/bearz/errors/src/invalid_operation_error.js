import { errorInfo } from "./error_info.js";
/**
 * Represents an error that occurs when an invalid operation is performed.
 *
 * @example
 * ```ts
 * import { InvalidOperationError } from "@bearz/errors/invalid-operation-error";
 *
 * function test(isInBadState: boolean) {
 *      if (isInBadState) {
 *          throw new InvalidOperationError({ message: "Operation is invalid.", target: "test" });
 *      }
 * }
 *
 * test(true);
 */
export class InvalidOperationError extends Error {
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
        super(message ?? "Invalid operation.", options);
        this.name = "InvalidOperationError";
        this.link =
            options?.link ??
                "https://jsr.io/@bearz/errors/doc/invalid-operation-error/~/InvalidOperationError";
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
     * import { InvalidOperationError } from "@bearz/errors/invalid-operation-error";
     *
     * try {
     *    throw new InvalidOperationError("Operation is invalid.");
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
