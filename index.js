const {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
} = require("./lib/dataOperations.js");

const { createFile, deleteFile } = require("./lib/fileOperations.js");

// export all functions

module.exports = {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
  createFile,
  deleteFile,
};
