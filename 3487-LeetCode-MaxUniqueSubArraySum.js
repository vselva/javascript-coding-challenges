/*
3487. Maximum Unique Subarray Sum After Deletion:
=================================================
You are given an integer array nums.

You are allowed to delete any number of elements from nums without making it empty. After performing the deletions, select a subarray of nums such that:

All elements in the subarray are unique.
The sum of the elements in the subarray is maximized.
Return the maximum sum of such a subarray.
*/

function removeDuplicates(nums) {
    let res = [];
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        let foundDup = false;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                foundDup = true;
            }
        }
        if (!foundDup) {
            res[k++] = nums[i];
        }
    }
    console.log(res);
    return res;
}

const sum = (nums) => {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) total += nums[i];
    }
    return total;
};

const maxValue = (nums) => {
    let max = numbs[0];
    for (const value of nums) {
        max = value > max ? value : max;
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function (nums) {
    let total = sum(removeDuplicates(nums));
    if (total > 0) return total;
    return maxValue(nums);
};

const nums = [1, 2, -1, -2, 1, 0, -1];

console.log(maxSum(nums));
