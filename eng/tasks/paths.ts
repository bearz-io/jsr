import { fromFileUrl } from "jsr:@std/path@1/from-file-url";
import { dirname } from "jsr:@std/path@1/dirname";

export const __dirname = dirname(fromFileUrl(import.meta.url));

/**
 * The root directory of the monorepo.
 */
export const rd = dirname(dirname(__dirname));
