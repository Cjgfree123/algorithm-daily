function fn(str) {
    let result = "";
    let dp = []; // str.length * str.length

    /**
     * 初始化基本条件: dp初始化
     */
    // 长度为1: 一定属于回文
    for (let i = 0; i < str.length; i++) {
        dp[i] = [];
        dp[i][i] = true;
        result = str.substring(i, i + 1); // 先存一份长度为1答案
    }

    // 长度为2: 后面=前面, 则是true
    for (let i = 0; i < str.length - 1; i++) {  // len - 1
        if (str.charAt(i) === str.charAt(i + 1)) {
            dp[i][i + 1] = true;
            result = str.substring(i, i + 2); // 先存一份长度为2答案
        } else {
            dp[i][i + 1] = false;
        }
    }

    // 长度>2
    for (let len = 3; len <= str.length; len++) { // 枚举长度
        for (let i = 0; i + len <= dp.length; i++) { // 以i开头, 长度为len
            let front = str.charAt(i);
            let end = str.charAt(i + len - 1);

            // 转移方程
            if (front === end) {
                // 最长: 以i开头，长度为len (判断内层)
                dp[i][i + len - 1] = dp[i + 1][i + len - 2]; // dp[i + 1][i + len - 2]:bool
            } else {
                dp[i][i + len - 1] = false;
            }

            if (dp[i][i + len - 1]) {
                result = str.substring(i, i + len); // 先存一份长度为len答案
            }
        }
    }
    return result;
}

let str = "dcbd  dcd";

console.log(fn(str));