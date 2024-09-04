# @bearz/assert

An opinionated assertion library that wraps the the 
Deno standard library's `@std/assert` module or the chai assertion library
depending on the package host (jsr or npm).

It is primarily used for testing for various bearz.io modules to make it
easier to write tests and switch between testing frameworks (deno test and vitest).

## Documentation

Documentation is available on [jsr.io](https://jsr.io/@bearz/assert/doc)

## Usage
```typescript
import { equal, ok, no } from "@bearz/assert";

equal(1, 1);
ok(true);
no(false);

```

## License

[MIT License](./LICENSE.md)
