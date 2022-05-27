let lines = ["100000 100000 44444 55555"]; //答え　738162020

//let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let score_pr = lines[0].split(' ').map(Number);
let ans;

function factirial(n){
    if(n>1){
        n = n * (n -1);
        factirial(n);
    } else {
        return n
    }
}

