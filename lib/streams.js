/*
 * This contains file operations using streams
 *
 *
 */

// dependencies
const util = require('util');
const stream = require('stream');
const { once } = require('events');
const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');
const { handleAsync, getPath } = require('./utils.js');

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

// copy with streams
async function copyWithStreams(path1, path2) {
  let readableStream = fs.createReadStream(path1, 'utf-8');
  let writableStream = fs.createWriteStream(path2 || path1);

  // handle chunks.
  for await (const chunk of readableStream) {
    const result = writableStream.write(chunk);
    if (!result) return [null, 'error while writing chunks'];
  }

  // handle stream error event
  readableStream.on('error', function (err) {
    return [null, err];
  });

  return [true, null];
}

// write with streams function
async function writeWithStreams(filePath, iterable) {
  const finished = util.promisify(stream.finished);
  const writable = fs.createWriteStream(filePath, { encoding: 'utf8' });
  for await (const chunk of iterable) {
    if (!writable.write(chunk)) {
      await once(writable, 'drain');
    }
  }
  writable.end();
  await finished(writable);
}

// compress file
async function compressFile(path1, path2) {
  return await handleAsync(() =>
    pipeline(
      fs.createReadStream(path1),
      zlib.createGzip(),
      fs.createWriteStream(path2)
    )
  );
}

module.exports = {
  readWithStream,
  copyWithStreams,
  writeWithStreams,
  compressFile,
};
