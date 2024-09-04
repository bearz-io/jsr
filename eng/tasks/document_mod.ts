import { dirname, isAbsolute, join, resolve } from "jsr:/@std/path@1";
import { walk } from "jsr:/@std/fs@1";
import { rd } from "./paths.ts"

const args = Deno.args;
let target = args[0];
if (!isAbsolute(target)) {
    if (target.startsWith("./")) {
        target = target.slice(2);
    }

    target = resolve(rd, target);
}


function isFile(path: string) {
    return Deno.lstat(path).then((stat) => stat.isFile).catch(() => false);
}

console.log("scanning", target);
for await (const entry of walk(target)) {
    if (entry.isDirectory) {

        
        const mod = join(entry.path, "mod.ts");
        let readme = join(entry.path, "README.md");

        // if the directory is src, then the readme is in the parent directory
        if (entry.name === "src") {
            const parent = dirname(entry.path);
            readme = join(parent, "README.md");
        }

        console.log("mod", mod);
        console.log("readme", readme);


        if (await isFile(mod) && await isFile(readme)) {
            const readmeContent = await Deno.readTextFile(readme);
            const modContent = await Deno.readTextFile(mod);

            const overviewIndex = readmeContent.indexOf("/**");
            const modCommentEndIndex = modContent.indexOf("*/");
            if (readmeContent.indexOf("# ") > -1) {
                if (modCommentEndIndex > -1) {
                    const modContentWithoutComment = modContent.slice(modCommentEndIndex + 2);
                    const newModContent = `/**
 * ${readmeContent.replaceAll("\n", "\n * ")}
 */`;

                    await Deno.writeTextFile(mod, newModContent + modContentWithoutComment);
                } else {
                    const newModContent = `/**
 * ${readmeContent.slice(overviewIndex).replaceAll("\n", "\n * ")}
 */
${modContent}`;
                    await Deno.writeTextFile(mod, newModContent);
                }
            }
        }
    }
}