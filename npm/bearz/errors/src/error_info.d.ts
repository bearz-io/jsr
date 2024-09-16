import type { ErrorInfo } from "./abstractions.js";
/**
 * Converts an error to an error information object for serialization.
 *
 * @description
 * The error information object is a plain object that can be serialized to JSON,
 * YAML, or any other format. The error information object contains at least the
 * `message` and `code` properties.
 *
 * The `message` property is the error message and the `code` property is the
 * error name. The `target`, `link`, `innerError`, and `details` properties are optional.
 *
 * The error information does not include the stack trace.
 * @param e The error to get information from.
 * @returns The error information which is a plain object for serialization.
 * @example
 * ```ts
 * import { errorInfo } from "@bearz/errors/error-info";
 *
 * try {
 *    throw new Error("Something went wrong.");
 * catch (e) {
 *     console.log(errorInfo(e));
 * }
 */
export declare function errorInfo(e: Error, includeStack?: false): ErrorInfo;
