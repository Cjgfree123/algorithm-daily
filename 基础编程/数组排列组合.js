// let arr = [
//     ['A', 'B', 'C'],
//     [1, 2, 3],
//     ['X', 'Y', 'Z']
//   ]

// 输出 A1X, A1Y, A1Z...

// 思路:
// 'A'
// 'A1', 'A2' ...
// 'A1X' ...



let arr = [
    ['A', 'B', 'C'],
    [1, 2, 3],
    ['X', 'Y', 'Z']
]

/**
 * @desc 根据二维矩阵数组, 创建出数组全排列
 * @param {arrays} 二维矩阵数组
 */
function getArrayByArrays(arrays) {
    var arr = [""];
    for (var i = 0; i < arrays.length; i++) {
        arr = getValuesByArray(arr, arrays[i]);
    }
    return arr;
}

/**
 * @desc 求两个一维数组的全排列, 比如: [1,2,3]和['A', 'B', 'C'].  (类似于reduce原理,将数组元素两两合并)
 * @param {*} arr1 (类似于prev, 初始是[''])
 * @param {*} arr2 (类似于cur, 初始是arrays[0])
 */
function getValuesByArray(arr1, arr2) {
    var arr = [];
    for (var i = 0; i < arr1.length; i++) {
        var v1 = arr1[i];
        /**
         * v1:
         * 第一轮: A B C
         * 第二轮: A1 A2 A3 B1 B2 B3 C1 C2 C3
         */
        for (var j = 0; j < arr2.length; j++) {
            var v2 = arr2[j];
            var value = v1 + v2;
            arr.push(value);
        };
    };
    return arr;
}  

console.log(getArrayByArrays(arr));
