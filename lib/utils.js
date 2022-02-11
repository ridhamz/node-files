async function handleAsync(fn) {
  try {
    const result = await fn();
    return [result || true, null];
  } catch (error) {
    return [null, error];
  }
}

function getPath(path, fileName, extension) {
  return `${path}/${fileName}.${extension}`;
}

module.exports = {
  handleAsync,
  getPath,
};
