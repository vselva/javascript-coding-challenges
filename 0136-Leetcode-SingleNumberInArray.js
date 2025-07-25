/*
136. Single Number
==================
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const length = nums.length;
    for (let i = 0; i < nums.length; i++) {
        let foundDup = false;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                foundDup = true;
                break;
            }
        }
        if (!foundDup) {
            return nums[i];
        }
    }
    return 0;
};

let nums = [2, 2, 1]; // Output: 1
console.log(singleNumber(nums));

nums = [4, 1, 2, 1, 2]; // Output: 4
console.log(singleNumber(nums));

nums = [1]; // Output: 1
console.log(singleNumber(nums));
