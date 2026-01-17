import fs from "fs";
import readline from "readline";

const readableStream = fs.createReadStream("doc.txt", { encoding: "utf-8" });

const rl = readline.createInterface({ input: readableStream });

rl.on("line", (line) => {
  console.log("Line:", line);
});

rl.on("close", () => {
  console.log("The line by line reading is finished...");
});

readableStream.on("Error", (err) => {
  console.log("Error: ", err);
});
