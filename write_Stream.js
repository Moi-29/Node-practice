import fs from "fs";

const writableStream = fs.createWriteStream("output.txt");

writableStream.write("Hello, guys what is up?, ");
writableStream.write("This is my first write stream example, ");
writableStream.write("I hope you are enjoying the content! ");

writableStream.end();

writableStream.on("finish", () => {
  console.log("finished writing the file.");
});
