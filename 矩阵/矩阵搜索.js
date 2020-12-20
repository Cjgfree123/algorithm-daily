/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 *  */

// 二维遍历
// var searchMatrix = function (matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === target) return true;
//         }
//     }
//     return false;
// };


// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
// let matrix = [];
// let target = 3;
// console.log(searchMatrix(matrix, target))



// 二分
// 有问题???????
// 时间:O(log(mn)) 空间:O(1)
// var searchMatrix = function (matrix, target) {
//     let m = matrix.length;
//     let n = matrix[0].length;

//     let left = 0, right = m * n - 1;// ????
//     let curIdx, cur;
//     while (left <= right) {
//         curIdx = (left + right) / 2;
//         let row = Math.floor(curIdx / n);
//         let col = Math.floor(curIdx % n);
//         cur = matrix[row][col];
//         if(target <= cur){
//             right = curIdx - 1;
//         }else{
//             left = curIdx + 1;
//         }
//     }
//     return false;
// };

// console.log("二分", searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 50))


let data = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 9, 10]
]
let w = data[0].length
let h = data.length

function search(n) {
    let r = w * h
    let l = 0
    while (l < r) {
        let mid = Math.trunc((l + r) / 2);
        let cur = getDataFromIndex(mid);
        if (cur < n) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    if (r === w * h) {
        return false;
    }
    return getDataFromIndex(r) === n;
}

function getDataFromIndex(index) {
    return data[Math.trunc(index / h)][Math.trunc(index % w)]
}

console.log("二分", search(10))
