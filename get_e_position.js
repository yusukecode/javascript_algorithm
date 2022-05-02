function findIndexOfStr(array, str) {
    let arr_len = array.length;
    let flg = false;
    
    for(i=0;i<arr_len;i++){
      let arr_txt_len = array[i].length;
      for(j=0;j<arr_txt_len;j++){
        if(array[i][j] === str){
          flg = true;
          return i;
        }     
      }
    }
    
    if(flg===false){
      return -1;
    }
  }

  let arr = ["Alice","Bob","Charles"];
  let ans = findIndexOfStr(arr,"C");
  console.log(ans);