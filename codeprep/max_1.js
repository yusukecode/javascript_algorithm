function max(array) {
	let array_len = array.length;
  let m = 0;
  let flg = false;
  
  for (let i = 0;i<array_len;i++){
    if(array[i] >= array[m]){
      m = i;
      flg = true
    }
  }
  
  if(flg != false){
    return array[m]
  } else {
    return -1
  }
}

let arr = [10,25,37,42,54];
let ans = max(arr);

console.log(ans);