// 普通
function fn(arr = [], x){
    let left = 0, right = arr.length, mid = Math.floor((left + right) / 2);
    while(left < right){
        // 绿豆子
        if(arr[mid] < x){
            left = mid + 1;
        }else{
            // 红豆子
            right = mid;
        }
        console.log("*****", left, right);
        mid = Math.floor((left + right) / 2)
    }
    if(arr[left] === x){
        return left;
    }else{
        console.log("没找到: ", x)
    }
}

// arr[mid]属于绿色、红色
// 绿豆:  <3
// 红豆:  >=3
let arr = [ 1,2,    3, 3 ,3, 4,5,6];
let x = 3;

console.log(fn(arr, x));

// 最先、最后
// 找不到

/**
 * 一、划分左右数组范围
 * 二、用target书写左右区间
 * 三、套用二
 * 四、题意，灵活调整返回值（默认left）
 */

 

