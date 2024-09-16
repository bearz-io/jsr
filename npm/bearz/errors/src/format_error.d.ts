import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
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
export declare class FormatError extends Error {
    /**
     * Creates a new instance of the FormatError class.
     * @param message The error message.
     * @example
     * ```ts
     * import { FormatError } from "@bearz/errors/format-error";
     *
     * throw new FormatError("Format is invalid.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the FormatError class.
     * @param options The error options.
     * @example
     * ```ts
     * import { FormatError } from "@bearz/errors/format-error";
     *
     * throw new FormatError({ message: "Format is invalid.", target: "user.name" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the FormatError class.
     */
    constructor();
    /**
     * A descriptor for associated target for the error.
     */
    target?: string;
    /**
     * A link to help documentation.
     */
    link?: string;
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
    toObject(): ErrorInfo;
}
