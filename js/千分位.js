/**
 * 1.考虑负号
 * 2.考虑小数点
 * 3.确定是数字
 */
let num = -1234567890123.555;

// 方法一 千分位
function format(num) {
    let str = num.toLocaleString();
    // ?= 先行断言,比如需要满足后面\d{3}
    // ?:\d{3} 非捕获连续字符
    let reg = /(\d)  ( ?=(?:\d{3}) +$)/g;
    let target = str.replace(reg, ($0, $1) => {
        return $1 + ','
    });
    return target;
}
console.log("out>>>", format(num));


// 方法二 千分位
function q(n) {
    let negFlag = false // 是否负数

    // 处理负号
    if (n < 0) {
        negFlag = true
        n = -n
    }
    let num = n + ''
    let x = ''

    // 处理小数部分
    if (num.indexOf('.') !== -1) {
        x = num.substr(num.indexOf('.'), num.length) // 后
        num = num.substr(0, num.indexOf('.')) // 前
    }

    let ans = ''
    // i:计数器  j:每三位
    for (let i = 0, j = num.length - 1; i < num.length; i++, j--) {
        if (i % 3 === 0 && i !== 0) {
            ans = ',' + ans
        }
        ans = num[j] + ans;
    }

    // 还原负号
    if (negFlag)
        ans = '-' + ans
    // 还原小数
    return ans + x
}

console.log("js", q(-1233334324.34355))




