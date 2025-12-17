import http from "http";
import url from "url";

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Welcome to the Home Page");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Page Not Found");
//   }
// });

// server.listen(3000, () => {
//   console.log("server is runnunig on port 3000");
// });

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "./data") {
//     let bodey = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       res.writeHead(200, { "content-type": "application/json" });
//       res.end(
//         JSON.stringify({ message: "Received successfully", data: "body" })
//       );
//     });
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("404 Route Not Found");
//   }
// });

// server.listen(3000, ()=>{
// 	console.log('The site is running on port 3000');

// })

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/search") {
    const queryObject = url.parse(req.url, true).query;

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Received", queryObject }));
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running under port 3000");
});
