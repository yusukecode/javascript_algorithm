let lines = ["2 3 1 1"]; //答え　738162020

//let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let score_pr = lines[0].split(' ').map(Number);
const[H,W,A,B] = score_pr;

function factirial(k) {
    var j = 1;
    for(var i = 1; i <= k; i++){
      j *= i;
    }
    return j;
  }

let sc = H + W;
let all_square = factirial(H+W) / (factirial(H)*factirial(W));
let sub_square = (factirial(A+B) / (factirial(A)*factirial(B)));

console.log(all_square);
console.log(sub_square);

console.log(all_square - sub_square);

