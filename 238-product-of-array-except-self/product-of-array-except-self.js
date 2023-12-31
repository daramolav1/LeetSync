/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let result = Array.from(nums, (x) => 1)

    let prefix = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }

    let postfix = 1

    for (let i = nums.length - 1; i > -1; i--) {
        result[i] *= postfix
        postfix *= nums[i]
    }
    
    return result
};