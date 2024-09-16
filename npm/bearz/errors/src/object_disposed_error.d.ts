import type { EnhancedErrorOptions, ErrorInfo } from "./abstractions.js";
/**
 * Represents an error that is thrown when an object has been disposed.
 *
 * @example
 * ```ts
 * import { ObjectDisposedError } from "@bearz/errors/object-disposed-error";
 *
 * class User {
 *   private isDisposed: boolean = false;
 *
 *   [Symbol.dispose]() {
 *       this.dispose();
 *   }
 *
 *   save() {
 *      if (this.isDisposed)
 *          throw new ObjectDisposedError("User disposed.");
 *      // Save user here.
 *   }
 *
 *   dispose()  {
 *      if (this._isDisposed) {
 *          return;
 *      }
 *      this.isDisposed = true;
 *      // Dispose resources here.
 *   }
 * }
 *
 * const user = new User();
 * user.dispose();
 *
 * user.save(); // Throws ObjectDisposedError.
 * ```
 */
export declare class ObjectDisposedError extends Error {
    /**
     * Creates a new instance of the ObjectDisposedError class.
     *
     * @param message The error message.
     *
     * @example
     * ```ts
     * import { ObjectDisposedError } from "@bearz/errors/object-disposed-error";
     *
     * throw new ObjectDisposedError("User disposed.");
     * ```
     */
    constructor(message: string);
    /**
     * Creates a new instance of the ObjectDisposedError class.
     * @param options The error options.
     *
     * @example
     * ```ts
     * import { ObjectDisposedError } from "@bearz/errors/object-disposed-error";
     *
     * throw new ObjectDisposedError({ message: "User disposed.", target: "user" });
     * ```
     */
    constructor(options: EnhancedErrorOptions);
    /**
     * Creates a new instance of the ObjectDisposedError class.
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
     * import { ObjectDisposedError } from "@bearz/errors/object-disposed-error";
     *
     * try {
     *    throw new ObjectDisposedError("User disposed.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): ErrorInfo;
}
