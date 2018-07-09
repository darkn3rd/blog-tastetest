var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

var port = process.env.APP_PORT || 8080;
var host = process.env.APP_HOST || "127.0.0.1";

server.listen(port, host);
console.log("Server running at http://" + host + ":" + port);
