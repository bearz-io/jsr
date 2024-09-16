import { errorInfo } from "./error_info.js";
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
export class ObjectDisposedError extends Error {
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
        super(message ?? "Object disposed.", options);
        this.name = "ObjectDisposedError";
        this.link =
            options?.link ??
                "https://jsr.io/@bearz/errors/doc/object-disposed-error/~/ObjectDisposedError";
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
     * import { ObjectDisposedError } from "@bearz/errors/object-disposed-error";
     *
     * try {
     *    throw new ObjectDisposedError("User disposed.");
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
