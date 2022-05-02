function filterEven(array) {
    let arr = [];
    let array_len = array.length;
    let s = 0;
    
    for(i=0;i<array_len;i++){
      if(array[i]%2===0){
        arr[s]=array[i];
        s+=1;
      }
    }
    
    return arr
  }
  
  let array = [10,25,37,42,54];
  let ans = filterEven(array);
  
  console.log(ans);