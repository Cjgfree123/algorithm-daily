/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     let arr = x.toString().split('') || [];
//     let char = '';
//     if(arr[0] === '-'){
//         char = arr[0];
//         arr.shift();
//     }
//     let arr1= arr.reverse();
//     arr1 = [char, ...arr1];
//     let str1 = arr1.join('') || '';

// // 判断边界
// let max = Math.pow(2, 31) - 1;
// let min = -Math.pow(2, 31);
// console.log("min", min, max);

// if(min < parseInt(str1) && parseInt(str1)  < max){
//     return parseInt(str1);
// } else{
//     return 0;
// }
// };

// console.log('>>', reverse(1534236469));


/**
 * 弹出和推入数字 & 溢出前进行检查
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let n = 0, flag = 1;
    if (x < 0) {
        flag = -1;
        x = -x;
    }
    while (x > 0) {
        n = n * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    n = n * flag;

    // 判断边界
    let max = Math.pow(2, 31) - 1;
    let min = -Math.pow(2, 31);
    if (n < min || n > max) {
        n = 0;
    }

    return n;
};


console.log('>>', reverse(15342364));