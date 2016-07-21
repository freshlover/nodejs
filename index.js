var http = require('http');

http.createServer(function(req,res)
{
    //console.log(req);

    res.writeHead(404, {'Content-Type':'text/plain'});
    //res.write('Error 404: resource not found.');
    res.end('testing: hello world!');

}).listen(8888,'127.0.0.1');