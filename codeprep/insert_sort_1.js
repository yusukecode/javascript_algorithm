function sortByLength(array) {
  let len = array.length;
  
  for(let i = 1;i < len;i++){
    let tmp = array[i];
    let j = i;
    while (j>0 && array[j-1].length <= tmp.length){
      if(array[j-1].length === tmp.length && array[j-1]<tmp){
        break
      }
      array[j] = array[j-1]
      j = j - 1;
    }
    array[j] = tmp;           
  }
  return array
}
  
  
let arr = ["apple","banana","chicken","doughnut","egg"];
let ans = sortByLength(arr);

console.log(ans);
  