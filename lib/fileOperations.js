/*
 * This file will contain all operations
 *
 *
 */

// dependencies
import fs from "fs/promises";
import { handleAsync, getPath } from "./utils.js";

// create a file
export async function createFile(path, fileName, extension, content = "") {
  const [result, error] = await handleAsync(() =>
    fs.open(getPath(path, fileName, extension), "wx")
  );
  console.log(result);
}

// get a file
export async function getFile(fileName, extension) {}

// update a file
export async function updateFile(path, fileName, extension, newContent) {}

// delete a file
export async function deleteFile(path, fileName, extension) {}
