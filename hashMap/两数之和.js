/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    nums.map((key, index) => {
        map.set(key, index);
    });
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] !== nums[i] && map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
// https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/

