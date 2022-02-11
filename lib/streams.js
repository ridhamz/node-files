/*
 * This contains big file operations using streams
 *
 *
 */

// dependencies
const fs = require('fs');

// read function
async function readWithStream(filePath) {
  let data = '';
  let error = '';
  // create a readable stream
  const readerStream = fs.createReadStream('./lib/file.txt', 'utf-8');

  // handle the data event.
  readerStream.on('data', function (chunk) {
    data += chunk;
  });

  // handle stream end event
  readerStream.on('end', function () {
    return [data, null];
  });

  // handle stream error event
  readerStream.on('error', function (err) {
    return [null, err];
  });
}

const [data, err] = await readWithStream();
console.log(data);

// write function
async function writeWithStream(path1, path2) {}

// copy with streams
async function copyWithStreams() {}

module.exports = {
  readWithStream,
  writeWithStream,
  copyWithStreams,
};
