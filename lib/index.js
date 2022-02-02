import {
  getFileData,
  createFile,
  writeFileData,
  deleteFile,
  clearFileData,
} from "./fileOperations.js";

//getFile();
//createFile("C:/Users/THINKPAD/Desktop/projects/node-files", "testts", "js");

const [result, error] = await clearFileData(
  "C:/Users/THINKPAD/Desktop/projects/node-files/testts.js"
);

if (error) console.log(error);

console.log(result);
