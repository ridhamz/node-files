/*
 * This contains big file operations using streams
 *
 *
 */

// dependencies
const fs = require('fs');

// read function
async function readWithStream(filePath, callBack) {
  let data = '';
  // create a readable stream
  const readerStream = fs.createReadStream(filePath, 'utf-8');

  // handle the data event.
  for await (const chunk of readerStream) {
    data += chunk;
  }

  if (typeof callBack === 'function') {
    callBack(data);
  }

  // handle stream error event
  readerStream.on('error', function (err) {
    return [null, err];
  });

  return [data, null];
}

// write function
async function writeWithStream(path1, path2) {}

// copy with streams
async function copyWithStreams(path1, path2) {}

module.exports = {
  readWithStream,
  writeWithStream,
  copyWithStreams,
};
