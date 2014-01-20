var sum = 0;
for (var arg in process.argv) {
  if(arg > 1){
    sum += parseInt(process.argv[arg], 10);
  }
}
console.log(sum);
