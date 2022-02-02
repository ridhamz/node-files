/*
 * This contains file operations
 *
 *
 */

// dependencies
import fs from "fs/promises";
import { handleAsync, getPath } from "./utils.js";

/**
 * Return an array contain the result and the error if exists.
 * create a new file.
 *
 *  @Params {String} path, {String} fileName, {String} extension
 * @return {Array}
 */
export async function createFile(path, fileName, extension) {
  return await handleAsync(() =>
    fs.open(getPath(path, fileName, extension), "wx")
  );
}

/**
 * Return an array contain the result and the error if exists.
 * delete a file.
 *
 *  @Params {String} path
 * @return {Array}
 */
export async function deleteFile(path) {
  return await handleAsync(() => fs.unlink(path));
}
