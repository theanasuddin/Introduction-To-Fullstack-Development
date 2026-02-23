const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    const headers = JSON.stringify(request.headers);
    response.write(headers);
    response.end();
  })
  .listen(3000);
