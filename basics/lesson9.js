var async = require('async');
var http = require("http");
var bl = require('bl');
var funcs = [];

function make_func(url) {
  return function(callback) {
    http.get(url, function (res) {
      res.pipe(
        bl(function (err, data) {
          callback(null, data.toString());
        })
      );
    });
  };
}

for (var arg in process.argv) {
  if(arg > 1){
    var url = process.argv[arg];
    funcs.push(make_func(url));
  }
}

async.parallel(funcs, function(err, res){
  res.forEach(function(r){
    console.log(r);
  });
});
