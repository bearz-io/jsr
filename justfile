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

    

test *args:
    #!{{bash}}
    deno task test {{args}}