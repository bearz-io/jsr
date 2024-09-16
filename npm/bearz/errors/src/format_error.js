import { errorInfo } from "./error_info.js";
/**
 * Error for when a format is invalid.  This can be used to indicate that a value
 * is not in the expected format such as a string or document.
 *
 * @example
 * ```ts
 * import { FormatError } from "@bearz/errors/format-error";
 *
 * function test(usCurrency: string) {
 *     if (!/^\$\d+\.\d{2}$/.test(usCurrency)) {
 *         throw new FormatError({ message: "Invalid US currency format.", target: "usCurrency
 *     }
 * }
 *
 * test("$100.00");
 * test("£100.00");
 * ```
 */
export class FormatError extends Error {
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
        super(message ?? "Invalid format.", options);
        this.name = "FormatError";
        this.link = options?.link ?? "https://jsr.io/@bearz/errors/doc/format-error/~/FormatError";
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
     * import { AbortError } from "@bearz/errors/format-error";
     *
     * try {
     *    throw new FormatError("Format is invalid.");
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
