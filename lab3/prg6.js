import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.statusCode = 200;
      res.end("sent with 200");
    } else if (req.url === "/about" && req.method === "GET") {
      res.statusCode = 200;
      res.end("req get");
    } else if (req.url === "/about" && req.method === "POST") {
      res.statusCode = 200;
      res.end("req post");
    } else if (req.url === "/about" && req.method === "DELETE") {
      res.statusCode = 200;
      res.end("req delete");
    } else {
      res.statusCode = 404;
      res.end("Page Not Found");
    }

});
server.listen(5000,()=>console.log("prg6 is running"));