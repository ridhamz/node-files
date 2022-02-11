const {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
} = require('./lib/dataOperations.js');

const { createFile, deleteFile } = require('./lib/fileOperations.js');

const {
  readWithStream,
  writeWithStream,
  copyWithStreams,
} = require('./lib/streams.js');

// export all functions
module.exports = {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
  createFile,
  deleteFile,
  readWithStream,
  writeWithStream,
  copyWithStreams,
};
