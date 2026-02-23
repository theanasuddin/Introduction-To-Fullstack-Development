const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });


  if (request.url === '/' || request.url === undefined) {
    fs.readFile(path.resolve('index.html'), function (error, file) {
      if (error) {
        response.writeHead(404);
        response.end(JSON.stringify(error));
        return;
      } else {
        // TODO: Send a response with the Content Security Policy 
        // header value as required. Response must have
        // - status 200
        // - header 'Content-Security-Policy' set to the required value
        // - 'file' paremeter as response body, using for example response.write
        response.writeHead(200, {
          "Content-Security-Policy":
            "img-src *.staticflickr.com *.creativecommons.org; script-src 'self'",
        });
        response.write(file);
        response.end();
      }
    })
  } else if (request.url === '/js/let_me_run.js') {
    fs.readFile(path.resolve('js/let_me_run.js'), function (error, file) {
      if (error) {
        response.writeHead(404);
        response.end(JSON.stringify(error));
        return;
      } else {
        // TODO 
        // Send a response which has:
        // - status code 
        // - header 'Content-Type' with value 'text/javascript'
        // - 'file' paremeter as response body, using for example response.write();
        response.writeHead(200, { "Content-Type": "text/javascript" });
        response.write(file);
        response.end();
      }
    })
  } else {
    // TODO 
    // Send a response for unknown paths, which has:
    // - status 404
    // - status message: 'Requested content not found';
    response.writeHead(404, "Requested content not found");
    response.end();
  }
});

// DO NOT MODIFY BELOW THIS LINE
module.exports = server;

if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}