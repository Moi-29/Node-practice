import http from "http";

const server = http.createServer((req, res) => {});

server.listen(3000, () => {
  console.log("server is runnunig on port 3000");
});
