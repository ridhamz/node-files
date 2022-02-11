/*
 * This contains big file operations using streams
 *
 *
 */

// dependencies
const fs = require('fs');

// read function
async function readWithStream(filePath, chunkCallback, dataCallback) {
  let data = '';
  // create a readable stream
  const readerStream = fs.createReadStream(filePath, 'utf-8');

  // handle chunks.
  for await (const chunk of readerStream) {
    // check if there is a chunk callback needs to execute
    if (typeof chunkCallback === 'function') {
      chunkCallback(chunk);
    }
    
    // concatenate the chunks
    data += chunk;
  }

  // check if there is dataCallback needs to execute.
  if (typeof callBack === 'function') {
    dataCallback(data);
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
