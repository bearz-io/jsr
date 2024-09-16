import { ArgumentRangeError } from "./argument_range_error.js";
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
export class StackTrace {
    frames;
    /**
     * Creates a new instance of the StackTrace class.
     */
    constructor() {
        this.frames = [];
    }
    /**
     * Gets the stack frame at the specified index.
     * @param index The index of the stack frame.
     * @returns The stack frame at the specified index.
     */
    at(index) {
        if (index < 0 || index >= this.frames.length) {
            throw new ArgumentRangeError({
                name: "index",
                value: index,
                message: "Index is less than 0 or great than the stack trace lenght.",
            });
        }
        return this.frames[index];
    }
    /**
     * Adds a stack frame to the stack trace.
     * @param frame The stack frame to add.
     */
    add(frame) {
        this.frames.push(frame);
    }
    removeAt(index) {
        if (index < 0 || index >= this.frames.length) {
            throw new ArgumentRangeError({
                name: "index",
                value: index,
                message: "Index is less than 0 or great than the stack trace lenght.",
            });
        }
        this.frames.splice(index, 1);
    }
    /**
     * Gets the number of stack frames in the stack trace.
     */
    get length() {
        return this.frames.length;
    }
    /**
     * Creates a stack trace from an error.
     * @param error The error to create a stack trace from.
     * @returns The stack trace.
     */
    static fromError(error) {
        return StackTrace.fromTrace(error.stack ?? "");
    }
    static fromTrace(trace) {
        const stackTrace = new StackTrace();
        const stack = trace.split("\n");
        for (const stackLine of stack) {
            let line = stackLine.trim();
            const frame = {};
            if (line.startsWith("at")) {
                if (line.includes("at new ")) {
                    continue;
                }
                line = line.substring(3);
                const parts = line.split(" ");
                let lineInfo = parts.find((p) => p.startsWith("(") || p.includes(":"));
                if (lineInfo) {
                    const og = lineInfo;
                    lineInfo = lineInfo.trim();
                    if (lineInfo.startsWith("(")) {
                        lineInfo = lineInfo.substring(1, lineInfo.length - 1);
                    }
                    let fileName = lineInfo;
                    let lineNumber = undefined;
                    let columnNumber = undefined;
                    if (lineInfo.includes(":")) {
                        if (lineInfo.includes("://")) {
                            let index = lineInfo.indexOf("://");
                            index += 3;
                            index = lineInfo.indexOf(":", index);
                            fileName = lineInfo.substring(0, index);
                            const remaining = lineInfo.substring(index + 1);
                            const parts = remaining.split(":");
                            if (parts.length === 2) {
                                lineNumber = Number.parseInt(parts[0]);
                                columnNumber = Number.parseInt(parts[1]);
                            }
                        }
                        else {
                            const parts = lineInfo.split(":");
                            if (parts.length === 2) {
                                fileName = parts[0];
                                lineNumber = Number.parseInt(parts[1]);
                            }
                            else if (parts.length === 3) {
                                fileName = parts[0];
                                lineNumber = Number.parseInt(parts[1]);
                                columnNumber = Number.parseInt(parts[2]);
                            }
                        }
                    }
                    frame.fileName = fileName;
                    frame.lineNumber = lineNumber;
                    frame.columnNumber = columnNumber;
                    const index = parts.indexOf(og);
                    if (index > 0) {
                        frame.functionName = parts[index - 1];
                    }
                    stackTrace.add(frame);
                }
            }
        }
        return stackTrace;
    }
}
