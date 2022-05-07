function addSumToMiddle(array) {
  
    let tmp = [];
    let array_len = array.length;
    let copy_array = []
    
    for(i=0;i<array_len;i++){
      copy_array[i] = array[i];
    }
    
    for(i=0;i+1<array_len;i++){
      tmp[i] = array[i] + array[i+1];
    }
    
    let ans_len = tmp.length + array_len;
    let s = 0;
    
    for(i=0;i<ans_len;i++){
      if((i+1)%2===0){
        array[i] = tmp[s];
        s++;
      } else {
        array[i] = copy_array[s];
      }
    }
    
  }