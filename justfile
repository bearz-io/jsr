bash := if os() == "windows" { "bash.exe" } else { "/usr/bin/env bash" }


new PATH TPL="lib" DESC="":
    #!{{bash}}
    case "{{TPL}}" in
        "lib") 
            moon generate lib "{{PATH}}"  -- --path="{{PATH}}" --description="{{DESC}}"
            ;;
        *)
            echo "Unknown template {{TPL}}"
            exit 1
    esac

npm-new PATH TPL="npm-lib" DESC="":
    #!{{bash}}
    case "{{TPL}}" in
        "npm-lib") 
            moon generate npm-lib "{{PATH}}"  -- --path="{{PATH}}" --description="{{DESC}}"
            ;;
        *)
            echo "Unknown template {{TPL}}"
            exit 1
    esac

copy mod:
    #!{{bash}}
    # if starts with @, strip the @
    mod="{{mod}}"
    mod=${mod#@}
    echo "Copying ${mod}"
    deno task npm:copy ./jsr/${mod}

lint mod:
    #!{{bash}}
    mod="{{mod}}"
    mod=${mod#@}
    echo "Linting ${mod}"
    deno task lint ./jsr/${mod}
    pushd ./npm/${mod}
    pnpm lint 
    popd

doc mod:
    #!{{bash}}
    mod="{{mod}}"
    mod=${mod#@}
    echo "Documenting ${mod}"
    deno task doc:mod ./jsr/${mod}

fmt mod:
    #!{{bash}}
    mod="{{mod}}"
    mod=${mod#@}
    echo "Linting ${mod}"
    deno task fmt ./jsr/${mod}
    pushd ./npm/${mod}
    pnpm fmt
    popd

test mod:
    #!{{bash}}
    # if starts with @, strip the @
    mod="{{mod}}"
    mod=${mod#@}
    echo "Testing ${mod}"
    deno task npm:copy ./jsr/${mod}
    deno task test ./jsr/${mod}
    pushd ./npm/${mod}
    pnpm test:run
    popd


npm-fmt:
    #!{{bash}}
    moon run :fmt --query ""