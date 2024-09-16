import { equal } from "@bearz/assert";
import { collect } from "./collect.ts";

// DO NOT REMOVE
// This line is used by automation to convert to vitest
const test = Deno.test;
test("errors::collectErrors", () => {
    const e0 = new Error("error 0");

    let set = collect(e0);
    equal(set.length, 1);

    let e = new AggregateError([new Error(), new Error()]);
    set = collect(e);
    equal(set.length, 3);

    e = new AggregateError([
        new Error(),
        new Error(),
        new AggregateError([new Error(), new Error()]),
    ]);
    set = collect(e);
    equal(set.length, 6);

    e.cause = new Error("cause");
    set = collect(e);
    equal(set.length, 7);

    const e2 = new Error("error 2");
    e2.cause = e0;
    set = collect(e2);
    equal(set.length, 2);

    e2.cause = e;
    set = collect(e2);
    equal(set.length, 8);
});
