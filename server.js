const http = require('http');

console.log("hello world server is running in http://localhost:8080")
http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);
