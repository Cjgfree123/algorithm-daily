/**
 * @param {number} n
 * @return {number}
 */

// 8
// [1,2,3, 4]

// 绿色sum <= n

var arrangeCoins = function(n) {
   let left = 0, right = n;
   while(left < right){
       let mid = Math.floor((left + right) / 2);
       let sum = (1 + mid) * mid / 2;
       if(sum <= n){
          left = mid + 1;
       }else{
         right = mid;
       }
   }
   return left - 1;
};

console.log("<<", arrangeCoins(5))