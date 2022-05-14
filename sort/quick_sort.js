function quick_sort(left,right){  //関数の定義
    let i = left;   //関数実行時、iにleftの値を代入
    let j = right;  //同様にjにrightの値を代入
    let p = data[Math.floor((left+right)/2)]; //軸（pivot）の値を決め、pに代入
    let tmp;  //data同士の値の入れ替えに使う変数
    
    console.log("i="+i+"j="+j+"pivot="+p);
    
    while(true){  //無限ループ
      while(data[i] < p){ //軸以上の値を探す
        i = i + 1;        //見つからない場合1つずつ右にシフト
      }
      while(data[j] > p){ //軸以下の値を探す
        j = j - 1;        //見つからない場合１つずつ左にシフト
      }
      if(i >= j){         //iがj以上になったら
        break             //無限ループを中断
      }
      tmp = data[j];      //値の交換のために一旦data[j]の値を格納
      data[j] = data[i];  
      data[i] = tmp;
      i = i + 1;          //値の交換が済んだら次の交換のための探査のため右にシフト
      j = j - 1;          //同様に左にシフト
    }
    console.log("過程="+`[${data}]`);
    console.log("left="+left+"i="+i+"right="+right+"j="+j);
    if(left < i-1){
      quick_sort(left,i-1);
    }
    if(right > j + 1){
      quick_sort(j+1,right);
    }
  }
  
  let data = [8,4,3,5,6,2,1,9,7,10]
  console.log("元のデータ" + `[${data}]`);
  console.log("------------------");
  quick_sort(0,data.length-1)
  console.log(`[${data}]`+ "ソート後のデータ");