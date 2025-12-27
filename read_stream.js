import fs from "fs";

const readableStream = fs.createReadStream("doc.txt", { encoding: "utf-8" });

readableStream.on("data", (chunk) => {
  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("The file is read...");
});

readableStream.on("error", (err) => {
  console.err("Error: ", err);
});
