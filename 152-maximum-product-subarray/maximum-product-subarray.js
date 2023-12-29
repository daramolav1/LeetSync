/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxSub = Math.max(...nums)
    let curMin = 1
    let curMax = 1

    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i] * curMax
        curMax = Math.max(nums[i] * curMax, nums[i] * curMin, nums[i])
        curMin = Math.min(temp, nums[i] * curMin, nums[i])
        maxSub = Math.max(maxSub, curMax)
    }

    return maxSub
};