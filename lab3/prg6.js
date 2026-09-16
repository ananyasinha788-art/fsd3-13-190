import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end("Get Request");
  } else if (req.url === "/" && req.method === "POST") {
    // console.log("Request:",req);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const product = JSON.parse(body);
      console.log("received products:", product);
      res.statusCode = 201;
      res.end(JSON.stringify({ msg: "product added", product }));
    });
  } else if (req.url === "/" && req.method === "PUT") {
    const productId = req.url.split('/').pop();
      res.statusCode=200;
      res.end("Put Request");
  }
    res.statusCode = 200;
    res.end("Put Request");
  } else if (req.url === "/" && req.method === "DELETE") {
    res.statusCode = 200;
    res.end("Delete Request");
  } else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5000, () => console.log("prg6 is running"));
