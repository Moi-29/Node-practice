import fs from "fs";

fs.mkdir("New_Directory", (err) => {
  if (err) {
    return console.log("Error in creating Directory");
  }
  console.log("Directory create");
});
