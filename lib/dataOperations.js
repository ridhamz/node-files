/*
 * This contains data operations
 *
 *
 */

// dependencies
import fs from "fs/promises";
import { handleAsync, getPath } from "./utils.js";

// get file data
export async function getFileData(path) {
  return await handleAsync(() => fs.readFile(path, "utf8"));
}

// write data
export async function writeFileData(path, newData) {
  const [result, error] = await getFileData(path);
  if (!error) {
    return await handleAsync(() => fs.writeFile(path, newData));
  }
  return [null, error];
}

// clear data
export async function clearFileData(path) {
  const [result, error] = await getFileData(path);
  if (!error) {
    return await handleAsync(() => fs.writeFile(path, ""));
  }
  return [null, error];
}

// update a file
export async function updateFile(path, fileName, extension, newContent) {}
