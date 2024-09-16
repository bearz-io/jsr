/**
 * Recursively walks through an error and its inner errors (if any),
 * and invokes a callback function for each error encountered.
 * @param e - The error to walk through.
 * @param callback - The callback function to invoke for each error encountered.
 *
 * @example
 * ```ts
 * import { walk } from "@bearz/errors/walk";
 *
 * const error = new Error("An error occurred.");
 * walk(error, (e) => {
 *      console.error(e);
 * });
 * ```
 */
export declare function walk(e: Error, callback: (e: Error) => void): void;
