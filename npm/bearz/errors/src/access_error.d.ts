import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that occurs when access to a resource is denied.
 *
 * @example
 * ```ts
 * import { AccessError } from "@bearz/errors/access-error";
 *
 * let allow = false;
 * // check if access is allowed
 * if (!allow)
 *    throw new AccessError("Access denied.");
 * ```
 */
export declare class AccessError extends Error {
    /**
     * Creates a new instance of the AccessError class.
     * @param message The error message.
     * @example
     * ```ts
     * import { AccessError } from "@bearz/errors/access-error";
     *
     * throw new AccessError("Access denied.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the AccessError class.
     * @param options The error options.
     * @example
     * ```ts
     * import { AccessError } from "@bearz/errors/access-error";
     *
     * throw new AccessError({ message: "Access denied.", target: "operation" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
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
     * import { AccessError } from "@bearz/errors/access-error";
     *
     * try {
     *    throw new AccessError("Access denied.");0
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
