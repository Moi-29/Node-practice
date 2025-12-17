import fs from "fs";
import readline from "readline";

const readableStream = fs.createReadStream("doc.txt", { encoding: "utf8" });

const rl = readline.createInterface({ input: readableStream });

rl.on("line", (line) => {
  console.log("Line: ", line);
});

rl.on("close", () => {
  console.log("Finished reading line by line");
});

readableStream.on("error", (err) => {
  console.error("Error reading file:", err);
});
