/**
 * @desc 左下方向, 对角线遍历
 */
// 货拉拉一面
var a = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]

var h = a.length;
var w = a[0].length;
var ans = [];
var head = [0,0];

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

// 存入当下位置cur[x,y]
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

function main(){
    output();
    while(moveHead()){
        output();
    }
    return ans;
}

console.log(main())