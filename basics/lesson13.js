var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  var urlobj = url.parse(req.url, true);
  var date = new Date(urlobj.query.iso);
  var resdata = {};

  if(req.url.indexOf("/api/parsetime") > -1 ) {
    resdata = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  }

  if(req.url.indexOf("/api/unixtime") > -1) {
    resdata = {
      "unixtime": date.getTime()
    };
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(resdata));
  res.end();
});

server.listen(process.argv[2]);
