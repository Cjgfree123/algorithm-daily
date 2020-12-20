/**
 * https://juejin.im/post/6844903949795852295
 */

/**
 * 一、递归解决
 */
//  demo1:青蛙跳楼梯 时间复杂度为O(2^n)
// function climbStairs(n) {
//     if (n == 1) return 1
//     if (n == 2) return 2
//     return climbStairs(n - 1) + climbStairs(n - 2)
// }

// demo1-优化: 加上缓存 时间复杂度o(n)
// var calculated = []

// function climbStairs(n) {
//     if (n == 1) {
//         return 1
//     } else if (n == 2) {
//         return 2
//     } else {
//         if (!calculated[n - 1]) {
//             calculated[n - 1] = climbStairs(n - 1)
//         }
//         if (!calculated[n - 2]) {
//             calculated[n - 2] = climbStairs(n - 2)
//         }
//         return calculated[n - 1] + calculated[n - 2]
//     }
// }
// console.log(climbStairs(5));


/***
 * 二、动态规划解决
 */
// demo1-优化: 爬楼梯
// function climbStairs(n) {
//     var val = [];
//     for (var i = 0; i <= n; ++i) {
//         val[i] = 0
//     }

//     // step1: 得出val[2] = 2, val[1] = 1
//     if (n <= 2) {
//         return n
//     } else {
//         val[1] = 1
//         val[2] = 2
//         // val[3] = val[2] + val[1]; 类似累加
//         for (var i = 3; i <= n; ++i) {
//             val[i] = val[i - 1] + val[i - 2]
//         }
//         return val[n]
//     }
// }
// console.log(climbStairs(10)) // 55


// demo2: 爬格子
// var uniquePathsWithObstacles = function (arr) {
//     // arr为二维数组，m为行，n为列
//     let n = arr.length, m = arr[0].length;
//     let temp = [];

//     // 1、初始化将格子填充为0
//     for (let i = 0; i < n; i++) {
//         temp[i] = Array(m).fill(0)
//     }

//     // 2、如果起始或终止目标有障碍物，则直接返回0
//     if (arr[0][0] == 1 || arr[n - 1][m - 1] == 1) {
//         return 0
//     }

//     // 3、遍历二维数组的列数(将爬过的格子设置成1, 比如: temp[i][j]=1; 没爬过且允许爬的设置成0)
//     for (i = 0; i < n; i++) {
//         // 4、遍历二维数组的行数
//         for (let j = 0; j < m; j++) {
//             if (i == 0 && j == 0) {
//                 temp[i][j] = 1;
//                 // 第一种边界情况：1行n列
//             } else if (i == 0) {
//                 // 如果在第一行: 当前列允许 && 上一列爬过了(temp[i][j-1] = 1)，则允许爬当前格子，并设置当前步数为1.
//                 if (arr[i][j] != 1 && temp[i][j - 1] != 0) {
//                     temp[i][j] = 1;
//                 } else {
//                     temp[i][j] = 0;
//                 }
//                 // 第二种边界情况： m行1列
//             } else if (j == 0) {
//                 // 如果在第一列: 当前行允许 & 上一行爬过了(temp[i-1][j] = 1), 则允许爬当前格子，并设置当前步数为1.
//                 if (arr[i][j] != 1 && temp[i - 1][j] != 0) {
//                     temp[i][j] = 1;
//                 } else {
//                     temp[i][j] = 0;
//                 }
//             } else if (arr[i][j] != 1) {
//                 // 如果不是上述的两种边界情况，终止条件的到达方式是i-1,j和i,j-1的和
//                 temp[i][j] = temp[i - 1][j] + temp[i][j - 1]
//             }
//         }
//     }
//     return temp[n - 1][m - 1]
// };

// console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])) // 2


//   demo3: 背包问题-最大体积
function beibao(M, W, arrP, arrW) {
    var result = []
    for (var i = 0; i <= M; i++) {
        result[i] = []
        for (var j = 0; j <= W; j++) {
            if (i == 0) {
                result[i][j] = 0
            } else if (arrW[i - 1] > j) {
                result[i][j] = result[i - 1][j]
            } else {
                result[i][j] = Math.max(arrP[i - 1] + result[i - 1][j - arrW[i - 1]], result[i - 1][j])
            }
        }
    }
    return result[i - 1][j - 1]
}

var M = 5; // 物体个数
var W = 16; // 背包总容量
var arrP = [4, 5, 10, 11, 13]; // 物体价值
var arrW = [3, 4, 7, 8, 9]; // 物体体积
console.log(beibao(M, W, arrP, arrW)); // 23
