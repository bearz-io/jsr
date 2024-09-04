# bearz.io typescript modules

The bearz.io typescript modules monorepo. The modules are published
to npm and jsr.io.

## Modules

- [@bearz/assert](./jsr/bearz/assert/README.md)
- [@bearz/runtime-info](./jsr/bearz/runtime-info/README.md)


## Development

Development is heavily done with [just](https://github.com/casey/just), 
[proto](https://moonrepo.dev/proto), [moon](https://moonrepo.dev/moon),
and [deno](https://deno.land).

Proto installs required tools and plugins for the monorepo.

Moon is used to generate the typescript modules and may be used 
in ci/cd pipelines in the future to mass run tasks.

Just is used to run the tasks in different contexts, especially
for the local development workflow.


## License

[MIT License](./LICENSE.md)