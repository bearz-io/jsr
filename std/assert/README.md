# @bearz/assert

Opinionated assertion library that wraps the the 
Deno standard library's `@std/assert` module.

It is primarily used for testing for various @bearz deno modules.

## Usage
```typescript
import { equal, ok, no } from "@bearz/assert";

equal(1, 1);
ok(true);
no(false);

```

## License

[MIT License](./LICENSE.md)
