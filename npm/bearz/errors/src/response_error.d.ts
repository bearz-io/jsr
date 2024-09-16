import type { ResponseErrorOptions, RespsonseErrorInfo } from "./abstractions.js";
export declare class ResponseError extends Error {
    constructor(request: Request);
    constructor(message: string);
    constructor(options: ResponseErrorOptions);
    constructor();
    target?: string;
    link?: string;
    url?: string;
    status?: number;
    statusText?: string;
    method?: string;
    headers?: Record<string, string | undefined>;
    /**
     * Converts the error to an object that can be serialized.
     * @returns The error as a plain object.
     *
     * @example
     * ```ts
     * import { ResponseError } from "@bearz/errors/response-error";
     *
     * try {
     *    throw new ResponseError("Request failed with 404 Not Found.");
     * } catch (error) {
     *    console.log(error.toObject());
     * }
     * ```
     */
    toObject(): RespsonseErrorInfo;
}
