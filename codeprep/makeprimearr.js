
//素数配列を生成する関数makePrimeArray()を実装してください。

function makePrimeArray(n) {
  
    let arr = [];
    let s = 1;
    
      for(i=1;i<=n;i++){
      let flg = true;
      if(i===1){    
      } else if (i === 2){
        arr[0] = 2;
      } else {
        for(j=0;j<arr.length;j++){
          if((i%arr[j]) === 0) {
                  flg = false;
          break
          }
        }
        if(flg === true) {
          arr[s] = i;
          s++;
          }
      }
    }
    return arr;
  }
  
  let n=100;
  let ans = makePrimeArray(n);
  
  console.log(ans);