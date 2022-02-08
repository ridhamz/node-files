/*
 * This contains big file operations using streams
 *
 *
 */

// dependencies
const fs = require('fs');

// read function
async function readWithStream(filePath) {
  // This line opens the file as a readable stream
  const readStream = fs.createReadStream(filePath);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function (err) {
    res.end(err);
  });
}

// write function
async function writeWithStream() {}

module.exports = {
  readWithStream,
  writeWitStream,
};
