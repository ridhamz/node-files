/*
 * This file contains some examples.
 *
 *
 */

// dependencies
const { createFile, deleteFile } = require('../lib/fileOperations.js');

const {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
} = require('../lib/dataOperations.js');

const {
  readWithStream,
  copyWithStreams,
  writeWithStreams,
  compressFile,
} = require('../lib/streams.js');
