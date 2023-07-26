const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("wlecome to homreoaje");
  }
  if (req.url === "/ab") {
    res.end("2 pahw");
  }
  res.end(`
  <h1>Oops<h1/>
  <a href='/'>back home <a/>`);
});

server.listen(5000);
