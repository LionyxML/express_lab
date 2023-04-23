const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // normalizes url removing qs, makes final slash optional
  // and enforces everything to lowercase letters

  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello there! What's up?</h1>");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
});

server.listen(port, () => console.log(`server running on port ${port}...`));
