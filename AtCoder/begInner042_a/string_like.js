/*let lines = ['3 3','dxx','axx','cxx'];

let score_pr = lines[0].split(' ').map(Number);*/

let lines = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");

let str_arr = [];

for(i=1;i<lines.length;i++){
 str_arr[i-1] = lines[i]; 
}

let s_arr_len = str_arr.length;

for(let j = 1;j < s_arr_len;j++){
  let tmp = str_arr[j];
  let k = j;
  while (k>0){
   if(str_arr[k-1]<tmp){
     break
   }
   str_arr[k] = str_arr[k-1]
    k = k -1;
  }
  str_arr[k] = tmp;
}

let ans = str_arr[0];
for(let n = 1;n < s_arr_len;n++){
  ans += str_arr[n];
}

console.log(ans);