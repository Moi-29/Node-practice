// const { generateRandomNumber, celsiusToFarenheit } = require("./utils");
// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celsius To Farenheit: ${celsiusToFarenheit(0)}`);

import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(`Posts length is ${getPostsLength()}`);
