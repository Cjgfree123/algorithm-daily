var a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]
  
  var h = a.length;
  var w = a[0].length;
  var ans = [];
  var head = [0,0];
  var head2 = [0,0];
  
  // 判断遍历范围是否合法
  function moveHead(){
    if(head[1] < w-1){
      head[1]++; // j++（横向）
      return true;
    }else if(head[0] < h-1){
      head[0]++; // i++(纵向)
      return true;
    }else{
      return false;
    }
  }
  
  
  // 判断遍历范围是否合法
  function moveHead2(){
    if(head2[0] < h-1){
      head2[0]++; // j++（横向）
      return true;
    }else if(head2[1] < w-1){
      head2[1]++; // i++(纵向)
      return true;
    }else{
      return false;
    }
  
  }
  
  // 存入当下位置cur[x,y]
  // 左下
  function output(){
    var cur = [];
    // head -> 存入cur[x,y]
    cur.push(head[0]);
    cur.push(head[1]);
    // 如果cur合法
    while(cur[0] < h && cur[1] >= 0){
      ans.push(a[cur[0]][cur[1]]);
      cur[0]++; // i++(纵向)
      cur[1]--; // j--(横向)
    }
  }
  
  // 右上
  function output2(){
    var cur = [];
    // head -> 存入cur[x,y]
    cur.push(head2[0]);
    cur.push(head2[1]);
    // 如果cur合法
    while(cur[0] >= 0 && cur[1] < w){
      ans.push(a[cur[0]][cur[1]]);
      cur[0]--;
      cur[1]++;
    }
  }
  
  function main(){
    let flag = true;
    output();
    while(moveHead2() && moveHead()){
      if (flag){
        output2();
      } else {
        output();
      }
      flag = !flag;
    }
    return ans;
  }
  
  console.log("output:" , main())