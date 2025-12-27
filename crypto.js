import crypto from "crypto";

const hash = crypto.createHash("sha256");
hash.update("Hello, guys...how are you?");
console.log(hash.digest("hex"));
