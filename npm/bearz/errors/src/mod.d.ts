/**
 * ## Overview
 *
 * All errors in @bearz will inherit from `SystemError`
 *
 * The errors module extends the built-in Error class to provide
 * additional functionality such as:
 *
 * - `toObject()` method to convert an error to JSON
 *    object.
 * - `set()` method to set multiple properties of the error.
 * - `stackTrace` property to get the stack trace as an array of strings.
 * - `code` property to get or set the error code.
 * - `target` property to get or set the target of the error
 *    such as the name of the method that threw the error.
 *
 * The module also provides a number of error classes that extend
 * and utility functions to work with errors:
 *
 * - `collect()` function to collect all the errors from an error object.
 * - `walk()` function to walk through an error and its inner errors.
 * - `printError()` function to print an error to the console.
 *
 * ## Basic Usage
 *
 * ```typescript
 * import { SystemError } from '@bearz/errors'
 *
 * try {
 *    throw new SystemError("message");
 * } catch (e) {
 *    console.log(e.stackTrace)
 *    console.log(e.code)
 * }
 *
 * ```
 *
 * [MIT License](./LICENSE.md)
 */
export * from "./abstractions.js";
export * from "./abort_error.js";
export * from "./access_error.js";
export * from "./argument_error.js";
export * from "./argument_empty_error.js";
export * from "./argument_null_error.js";
export * from "./argument_range_error.js";
export * from "./assertion_error.js";
export * from "./collect.js";
export * from "./error_info.js";
export * from "./format_error.js";
export * from "./invalid_cast_error.js";
export * from "./invalid_operation_error.js";
export * from "./not_implemented_error.js";
export * from "./not_supported_error.js";
export * from "./null_reference_error.js";
export * from "./object_disposed_error.js";
export * from "./response_error.js";
export * from "./stacktrace.js";
export * from "./timeout_error.js";
export * from "./walk.js";
