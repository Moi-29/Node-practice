import crypto from "crypto";

const hash = crypto.createHash("sha256");
hash.update("Hello, world of wolrd");
console.log(hash.digest("hex"));
