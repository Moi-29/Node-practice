import fs from "fs";

const files = "Hello, guys";
fs.writeFile("write.txt", files, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File is successfully written");
});
