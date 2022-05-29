
//let lines = [1];
let line = require("fs").readFileSync("/dev/stdin", "utf8");
let N = parseInt(line);
function ans(n){
    if(n===0){
        return 0;
    }
    return n + ans(n-1)
}

console.log(ans(N));