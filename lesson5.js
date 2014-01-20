fs.readdir(process.argv[2], function(err, list) {
  for(file in list) {
    if(path.extname(list[file]) === "." + process.argv[3]){
      console.log(list[file]);
    }
  }
});
