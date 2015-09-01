/**
 * Created by Jon on 01/09/2015.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World jonboy\n');
}).listen(3000);
console.log('Server running jonny!');