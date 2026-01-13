import fs from "fs/promises";

function readFileAsync() {
  fs.readFile("doc.txt", "utf-8")
    .then(content => {
      console.log(content);
      console.log("File reading completed successfully.");
    })
    .catch(error => {
      console.error("File read error:", error);
    });
}

readFileAsync();
