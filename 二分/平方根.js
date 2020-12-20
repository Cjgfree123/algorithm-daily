/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//     for(let i = 0;i <= x; i++){
//         // (?^2=x, 包括0、1)
//         if(x === Math.pow(i, 2)){
//             return i;
//         // 同时包容x=2
//         }else if( x > Math.pow(i - 1, 2)  && x < Math.pow(i, 2)){
//             return i - 1;
//         }
//     }
// };

// console.log(mySqrt(4));



//  1 2    3 4 5 6 7 8 9
 {/* 
 绿豆子
  mid*mid <= 9
  */}
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2){
        return x;
    } 
    let left = 0, right = x;
    while(left < right){
        let mid = Math.floor((left + right) / 2)
        if(mid * mid <= x){
            left = mid + 1;
        }else{
            right = mid;
        }
    }

    return left - 1;
};

console.log(mySqrt(9));


