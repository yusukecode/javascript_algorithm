function removeOdd(array) {
	for(i=0;i<array.length;i++){
    if(array[i]%2!=0){
      array.splice(i,1);
      i--;
    }
  }
  return array;
}

let arr = [10,25,37,42,54];
let ans = removeOdd(arr);

console.log(ans);