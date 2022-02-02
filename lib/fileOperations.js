/*
 * This contains file operations
 *
 *
 */

// dependencies
import fs from "fs/promises";
import { handleAsync, getPath } from "./utils.js";

// create a file
export async function createFile(path, fileName, extension, content = "") {
  return await handleAsync(() =>
    fs.open(getPath(path, fileName, extension), "wx")
  );
}

// delete a file
export async function deleteFile(path) {
  return await handleAsync(() => fs.unlink(path));
}
