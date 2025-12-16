import crypto from "crypto";

const hash = crypto.createHash("sha156");
hash.update("Hello");
console.log(hash.digest("hex"));
