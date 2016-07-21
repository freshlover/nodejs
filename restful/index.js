var http = require("http");

http.createServer(function(request, response)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(request.method);
    gotoApi(request, response);
    response.end();

}).listen(3000);

function gotoApi(req, res)
{
    switch (req.method) 
    {

        case 'POST':

        break;

        case 'GET':

        break;

        case 'DELETE':

        break;

    }
}