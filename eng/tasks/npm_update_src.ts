import { dirname, globToRegExp, isAbsolute, isGlob, resolve } from "jsr:/@std/path@1";
import { copy, ensureDir, exists, walk } from "jsr:/@std/fs@1";
import { rd } from "./paths.ts";

const args = Deno.args;
let target = args[0];
const root = rd;

if (!isAbsolute(target)) {
    if (target.startsWith("./")) {
        target = target.slice(2);
    }

    target = resolve(root, target);
}

const jsrPath = resolve(root, "jsr");
const npmPath = resolve(root, "npm");

const denoJsonPath = resolve(target, "deno.json");
const excludes: string[] = ["moon.yml", "deno.json", "justfile"];
if (await exists(denoJsonPath)) {
    const context = await Deno.readTextFile(denoJsonPath);
    const json = JSON.parse(context);
    if (json.copy?.excludes && Array.isArray(json.copy.excludes)) {
        excludes.push(...json.copy.excludes);
    }

    if (json.copy?.exclude && Array.isArray(json.copy.exclude)) {
        excludes.push(...json.copy.exclude);
    }
}

for await (
    const entry of walk(target, {
        includeDirs: false,
        includeFiles: true,
        includeSymlinks: false,
        match: [/^(?!.*node_modules).*/],
    })
) {
    console.log("");
    console.log(entry.path);
    let skip = false;
    for (const exp of excludes) {
        if (isGlob(exp)) {
            if (globToRegExp(exp).test(entry.path)) {
                skip = true;
                continue;
            }
        } else if (entry.path.replaceAll("\\", "/").endsWith(exp)) {
            skip = true;
            continue;
        }
    }

    if (skip) {
        console.log("skipping", entry.path, true);
        continue;
    }

    if (entry.name.endsWith(".ts") && !entry.name.endsWith(".d.ts")) {
        const isTest = entry.name.endsWith("_test.ts");
        const content = await Deno.readTextFile(entry.path);
        const lines = content.split(/\r?\n/g);
        let i = 0;
        let update = false;
        const newLines = [];
        while (i < lines.length) {
            const line = lines[i];
            if (isTest) {
                if (line.includes(' "ignore": ')) {
                    newLines.push(line.replace(' "ignore":', " skip: "));
                    update = true;
                    i++;
                    continue;
                }
                if (line.includes(" ignore: ")) {
                    newLines.push(line.replace(" ignore: ", " skip: "));
                    update = true;
                    i++;
                    continue;
                }

                if (line.startsWith("const test = Deno.test;")) {
                    newLines.push("const { test } = await import('vitest')");
                    update = true;
                    i++;
                    continue;
                }

                // everything below this line is deno specific
                if (line.startsWith("// +DENO")) {
                    update = true;
                    break;
                }
            }

            if (line.endsWith('.ts"')) {
                newLines.push(line.replace('.ts"', '.js"'));
                update = true;
                i++;
                continue;
            } else if (line.endsWith('.ts";')) {
                newLines.push(line.replace('.ts";', '.js";'));
                update = true;
                i++;
                continue;
            }

            newLines.push(line);

            i++;
        }

        if (update) {
            console.log("updating", entry.path);
            const destFile = resolve(npmPath, entry.path.substring(jsrPath.length + 1));
            const dir = dirname(destFile);
            await ensureDir(dir);

            await Deno.writeTextFile(
                destFile,
                newLines.join(Deno.build.os === "windows" ? "\r\n" : "\n"),
            );
        } else {
            const destFile = resolve(npmPath, entry.path.substring(jsrPath.length + 1));
            const dir = dirname(destFile);
            await ensureDir(dir);
            await copy(entry.path, destFile, { overwrite: true, preserveTimestamps: true });
        }
    } else {
        const destFile = resolve(npmPath, entry.path.substring(jsrPath.length + 1));
        console.log("src", entry.path);
        console.log("dest", destFile);
        const dir = dirname(destFile);
        await ensureDir(dir);
        await copy(entry.path, destFile, { overwrite: true, preserveTimestamps: true });
    }
}
