import { getFileData, createFile } from "./fileOperations.js";

//getFile();
createFile("C:/Users/THINKPAD/Desktop/projects/node-files", "tests", "js");

const [result, error] = await getFileData(
  "C:/Users/THINKPAD/Desktop/projects/node-files/test.js"
);

if (error) console.log(error);
if (result) console.log(result);
