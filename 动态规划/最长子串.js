// dp[i][j]表示s1的i位置结尾的子串 & s2的j位置结尾的子串的最大公共子串的长度 所以如果s1[i] === s2[j], 则dp[i][j]可以从dp[i-1][j-1]转移过来, 然后记录最大的长度就是答案

if (s1[i - 1] === s2[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1] + 1;
    max = Math.max(max, dp[i][j]);
}