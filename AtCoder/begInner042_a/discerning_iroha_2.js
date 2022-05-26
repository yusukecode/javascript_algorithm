//https://atcoder.jp/contests/abc042/tasks/arc058_a

//let lines = ["9999 8","3 4 5 6 7 8 9"];

let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let score_pr = lines[0].split(' ').map(Number);
let score_pr_num = lines[1].split(' ').map(Number);
let ans;

let N = score_pr[0];

for(i = N;i<100000;i++){ //値段の最大値が10000だからそれ以上の額を100000で網羅する。
    ans = String(i);
    let flg = true;

    for(let j of score_pr_num){
        if(ans.indexOf(j) != -1){ //嫌いな数が入っていないかチェック
            flg=false;
            break
        }
    }
    if(flg===true){
        console.log(ans);
        break
    } else {
        continue
    }
}