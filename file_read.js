import fs from "fs";

fs.readFile("./doc.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
