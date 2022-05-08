function sortByLength(array) {
    let array_len = array.length;
    let tmp;
    
    for(let i = 0;i<array_len;i++){
      let m = i;
      for(let j=i+1;j<array_len;j++){
        if(array[j].length>array[m].length){
          m = j;
        } else if(array[j].length === array[m].length && array[j] < array[m]){
          m = j;
        }
      }
      tmp = array[i];
      array[i] = array[m];
      array[m] = tmp;
    }
    return array;
  }
  
  
  let arr = ["apple","banana","chicken","doughnut","egg"];
  let ans = sortByLength(arr);
  
  console.log(ans);
  