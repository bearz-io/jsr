import type { StackFrame } from "./abstractions.js";
/**
 * Represents a stack trace.
 *
 * @description
 * The StackTrace class is used to represent a stack trace. It
 * is currently experimental and may change in the future.
 *
 * @example
 * ```ts
 * import { StackTrace } from "@bearz/errors/stacktrace";
 *
 * try {
 *      throw new Error("An error occurred.");
 * } catch (error) {
 *      const stackTrace = StackTrace.fromError(error);
 *      for (let i = 0; i < stackTrace.length; i++) {
 *              const frame = stackTrace.at(i);
 *              console.log(`at ${frame.functionName} (${frame.fileName}:${frame.lineNumber}:${frame.columnNumber})`);
 *      }
 * }
 *
 * @category experimental
 */
export declare class StackTrace {
    private frames;
    /**
     * Creates a new instance of the StackTrace class.
     */
    constructor();
    /**
     * Gets the stack frame at the specified index.
     * @param index The index of the stack frame.
     * @returns The stack frame at the specified index.
     */
    at(index: number): StackFrame;
    /**
     * Adds a stack frame to the stack trace.
     * @param frame The stack frame to add.
     */
    add(frame: StackFrame): void;
    removeAt(index: number): void;
    /**
     * Gets the number of stack frames in the stack trace.
     */
    get length(): number;
    /**
     * Creates a stack trace from an error.
     * @param error The error to create a stack trace from.
     * @returns The stack trace.
     */
    static fromError(error: Error): StackTrace;
    static fromTrace(trace: string): StackTrace;
}
