const http = require("http");

http
  .createServer(function (request, response) {
    let body = "";

    request.on("data", function (chunk) {
      body += chunk;
    });

    request.on("end", function () {
      const reversed = body.split("").reverse().join("");
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(reversed);
      response.end();
    });
  })
  .listen(3000);
