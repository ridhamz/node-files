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
  return [result, error];
}

// get file data
export async function getFileData(path) {
  const [result, error] = await handleAsync(() => fs.readFile(path, "utf8"));
  return [result, error];
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

// delete a file
export async function deleteFile(path) {
  return await handleAsync(() => fs.unlink(path));
}
