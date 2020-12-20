/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 绿: nums[mid] == mid
 * 红
 */


var missingNumber = function(nums) {
    let left = 0, right = nums.length;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] == mid){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return right;
};

console.log("+++", missingNumber([0,1,2,3,4,5,6,7,9]))