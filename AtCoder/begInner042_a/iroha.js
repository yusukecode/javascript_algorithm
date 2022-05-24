
const arr = [7,5,5];
console.log(Iroha(arr));

function Iroha(array){
  let score_5 = 0;
  let score_7 = 0;
  
  for(i = 0;i<array.length;i++){
    if(array[i]===7){
      score_7 += 1;
    } else if (array[i]===5){
      score_5 += 1;
    }
  }
  
  if(score_7===1&&score_5===2){
   	return "YES" 
  } else {
   	return "NO" 
  }
}

/*提出分

function Main(input){
  input = input.split("\n")
  const arr = input[0].split(" ").map(Number);
	console.log(Iroha(arr));
}

function Iroha(array){
  let score_5 = 0;
  let score_7 = 0;
  
  for(i = 0;i<array.length;i++){
    if(array[i]===7){
      score_7 += 1;
    } else if (array[i]===5){
      score_5 += 1;
    }
  }
  
  if(score_7===1&&score_5===2){
   	return "YES" 
  } else {
   	return "NO" 
  }
}

Main(require('fs').readFileSync('/dev/stdin','utf8'))

*/