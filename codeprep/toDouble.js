function toDouble(array) {
    let arr = [];
    let array_len = array.length;
    
    for(i=0;i<array_len;i++){
      arr[i] = array[i] * 2;
    }
    
    return arr
  }
  
  let array = [10,25,37,42,54];
  let ans = toDouble(array);
  
  console.log(ans);