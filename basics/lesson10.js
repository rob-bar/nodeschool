var args = process.argv;
var net = require('net');
var date = new Date();

function zeroFill(nr, depth){
  depth = (depth === undefined)? 1 : depth;

  var zero = "0";
  for (var i = 0; i < depth; ++i) {
    zero += "0";
  }

  return (zero + nr).slice(-(depth + 1));
}

var mydate = {
  year: date.getFullYear(),
  month: zeroFill((date.getMonth() + 1).toString()),
  day: zeroFill(date.getDate().toString()),
  h: zeroFill(date.getHours().toString()),
  m: zeroFill(date.getMinutes().toString())
};


var server = net.createServer(function (socket) {
  socket.end(mydate.year + "-" + mydate.month + "-" + mydate.day + " " + mydate.h + ":" + mydate.m + "\n");
});
server.listen(args[2]);



