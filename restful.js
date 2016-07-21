var http   = require("http");
var qs     = require("querystring");
var url    = require("url");
var gd     = require("gd");
var params = '';

http.createServer(function(request, response)
{
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.setHeader('Transfer-Encoding', 'chunked');

    var html =
        '<!DOCTYPE html>' +
        '\n<html lang="en">' +
        '\n<head>' +
        '\n<meta charset="utf-8">' +
        '\n<title>RESTful Web 服务</title>' +
        '\n</head>' +
        '\n<body>';

    response.write(html);

    //response.write(request.method);
    gotoApi(request, response);

    // since this is the last chunk, close the stream.
    html =
        '\n</body>' +
        '\n</html>';

    response.end(html);

}).listen(3000);

function gotoApi(req, res)
{
    switch (req.method) 
    {
        case 'POST':

            var item = '';


        break;

        case 'GET':

            params = url.parse(req.url);
            gd.printr(params);

        break;

        case 'DELETE':

        break;

    }
}


