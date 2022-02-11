const { createFile, deleteFile } = require('./lib/fileOperations.js');

const {
  getFileData,
  writeFileData,
  clearFileData,
  updateFileData,
} = require('./lib/dataOperations.js');

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

// testing

(async () => {
  const [data, error] = await readWithStream('./test/file.js');
  console.log(data);
})();
