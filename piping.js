import fs from "fs";

const readableStream = fs.createReadStream("doc.txt", { encoding: "utf-8" });

const writableStream = fs.createWriteStream("doc_out.txt");

readableStream.pipe(writableStream);

readableStream.on("error", (err) => {
  console.error("Error reading file:", err);
});

writableStream.on("error", (err) => {
  console.error("Error writing file:", err);
});

writableStream.on("finish", () => {
  console.log("File copied.");
});
