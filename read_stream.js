import fs from "fs/promises";

/**
 * Asynchronously reads the entire file into memory.
 * Suitable for small to medium-sized files.
 */
async function readFileAsync() {
  try {
    const fileContent = await fs.readFile("doc.txt", "utf-8");
    console.log(fileContent);
    console.log("File reading completed successfully.");
  } catch (error) {
    console.error("File read error:", error);
  }
}

readFileAsync();
