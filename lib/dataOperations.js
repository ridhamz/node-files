/*
 * This contains data operations
 *
 *
 */

// dependencies
import fs from "fs/promises";
import { handleAsync, getPath } from "./utils.js";

/**
 * Return an array contain the result and the error if exists.
 * get file data.
 *
 *  @Params {String} path
 * @return {Array}
 */
async function getFileData(path) {
  return await handleAsync(() => fs.readFile(path, "utf8"));
}

/**
 * Return an array contain the result and the error if exists.
 * write data on a specific file.
 *
 *  @Params {String} path, newData
 * @return {Array}
 */
async function writeFileData(path, newData) {
  const [result, error] = await getFileData(path);
  if (!error) {
    return await handleAsync(() => fs.writeFile(path, newData));
  }
  return [null, error];
}

/**
 * Return an array contain the result and the error if exists.
 * clear file data.
 *
 *  @Params {String} path
 * @return {Array}
 */
async function clearFileData(path) {
  const [result, error] = await getFileData(path);
  if (!error) {
    return await handleAsync(() => fs.writeFile(path, ""));
  }
  return [null, error];
}

/**
 * Return an array contain the result and the error if exists.
 * update file data.
 *
 * @Params {String} path, Data
 * @return {Array}
 */
async function updateFileData(path, newContent) {
  return writeFileData(path, newContent);
}

module.exports = {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
};
