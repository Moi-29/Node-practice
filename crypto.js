import crypto from "crypto";

const hash = crypto.createHash("sha256");
hash.update("Hello");
console.log(hash.digest("hex"));
