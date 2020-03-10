const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let A = null;
let B = null;
let temp = null;
let patt = /[0-9]+ [0-9]+/i;

rl.on('line', (line) => {
  if(line.match(patt)){
    var nums = line.split(' ');
    A = parseInt(nums[0]);
    B = parseInt(nums[1]);
    write();
  }
});

function write(){
  console.log(B);
}