import url from "url";

const myUrl = new URL("http://example.com:8080/path/name?query=hello#hash");

console.log("host:", myUrl.host);
console.log("path name:", myUrl.pathname);
console.log("parameter:", myUrl.searchParams.get("query"));
