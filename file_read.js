import fs from "fs";

// fs.readFile("./doc.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

fs.writeFile("./doc.txt", "Hello, SWE", () => {
  console.log("Your file is overwritten!");
});
