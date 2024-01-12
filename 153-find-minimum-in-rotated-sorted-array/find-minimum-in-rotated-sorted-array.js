/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    // let result = nums[0]
    // let l = 0
    // let r = nums.length - 1

    // while (l <= r) {
    //     if (nums[l] < nums[r]) {
    //         result = Math.min(result, nums[l])
    //         break
    //     }

    //     let m = (l + r) / 2
    //     result = Math.min(result, nums[m])

    //     if (nums[m] >= nums[l]) {
    //         l = m + 1
    //     } else {
    //         r = m - 1
    //     }
    // }

    // return result

    return Math.min(...nums)
};