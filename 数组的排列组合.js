// 拆解: 每次只合并两个数组
// 考虑: (1)每一项为[]  (2)数组arr长度为1
var arr = [
    ['A', 'B', 'C'], 
    [],
    [4, 5, 6],
]

function merge(a1, a2) {
    let arr = [];
    if(!a1.length) return a2;
    if(!a2.length) return a1;
    for (let i = 0; i < a1.length; i++) {
        for (let j = 0; j < a2.length; j++) {
            arr.push(a1[i] + a2[j]);
        }
    }
    return arr;
}

function fn(arr){
    let res = arr.reduce((pre, cur) => {
        return merge(pre, cur);
    })

    return res;
}

console.log("out>>", fn(arr))