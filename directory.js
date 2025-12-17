import fs from "fs";

fs.mkdir("New_Directory", (err) => {
  if (err) {
    return console.error("Error in creating Directory");
  }
  console.log("Directory create");
});
