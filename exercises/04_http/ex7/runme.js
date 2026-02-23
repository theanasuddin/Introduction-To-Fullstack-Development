const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

module.exports = http
  .createServer(function (request, response) {
    const pathname = url.parse(request.url).pathname;
    if (pathname === "/") {
      readFileSendResponse("index.html", "text/html", response);
    } else if (pathname === "/classical") {
      readFileSendResponse("homer.html", "text/html", response);
    } else if (pathname === "/dystopy") {
      readFileSendResponse("bradbury.html", "text/html", response);
    } else {
      response.statusCode = 404;
      response.statusMessage = "Requested content not found";
      response.end();
    }
  })
  .listen(3000);

/*
 * @param {string} fileName - name of the file to be read
 * @param {string} contentType - type of the content to be sent in the response
 * @param {object} response - response object
 */
const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function (error, file) {
    if (error) {
      response.writeHead(404);
      response.write("An error occured: ", error);
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.write(file);
    }
    response.end();
  });
};
