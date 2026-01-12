import fs from "fs";

/**
 * Create a readable stream to read the file incrementally.
 * Streaming is memory-efficient for large files because data
 * is processed in chunks instead of loading the entire file at once.
 */
const fileReadStream = fs.createReadStream("doc.txt", {
  encoding: "utf-8",
});

/**
 * Triggered whenever a chunk of data is available.
 */
fileReadStream.on("data", (dataChunk) => {
  console.log(dataChunk);
});

/**
 * Triggered after the entire file has been read.
 */
fileReadStream.on("end", () => {
  console.log("File reading completed successfully.");
});

/**
 * Triggered if an error occurs during the stream operation.
 */
fileReadStream.on("error", (error) => {
  console.error("File read error:", error);
});
