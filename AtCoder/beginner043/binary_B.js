
//lines = '0BB1';
//key_arr = [...lines];
//console.log(key_arr); //[ '0', 'B', 'B', '1' ]

let lines = require("fs").readFileSync("/dev/stdin", "utf8");
key_arr = lines.trim().split('');
tmp = [];
num = 0;
for(i=0;i<key_arr.length;i++){
    if(key_arr[i] === 'B' && tmp[num-1] === ''|| key_arr[i] === 'B' && num === 0){
    } else if(key_arr[i] === 'B' && tmp[num-1] != '' && num > 0){
        num -= 1;
        tmp[num] = '';
    } else {
        tmp[num] = key_arr[i];
        num += 1;
    }
}

console.log(tmp.join(''))