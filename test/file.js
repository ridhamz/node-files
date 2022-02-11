/*
 * This contains file operations
 *
 *
 */

// dependencies
const fs  = require("fs/promises");
const { handleAsync, getPath } = require("../lib/utils.js");

/**
 * Return an array contain the result and the error if exists.
 * create a new file.
 *
 *  @Params {String} path, {String} fileName, {String} extension
 * @return {Array}
 */
async function createFile(path, fileName, extension) {
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
async function deleteFile(path) {
  return await handleAsync(() => fs.unlink(path));
}

module.exports = {
  createFile,
  deleteFile,
};
