//let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n"); //['3 3','dxx','axx','cxx']
//let score_pr = lines[0].split(' ').map(Number);

let lines = ["1000 8",1,3,4,5,6,7,8,9];
let score_pr = lines[0].split(' ').map(Number);
let score_pr_num = lines[1].split(' ').map(Number);

let N = score_pr[0]; //値段
let K = score_pr[1]; //嫌いな数字の数

let true_num =[]; //嫌いじゃない数を格納
let num_str = String(N); //値段を文字列に
let num_len = num_str.length; //桁数を調べる

for(i=0;i<=9;i++){
    let flg = true; //判定用
    for(j=0;j<K;j++){
        if(i===score_pr_num[j]){
            flg = false;
        }
    }
    if(flg===true){
        true_num.push(i);
    }
}

let true_num_len = true_num.length; //一番奥に最大値がある