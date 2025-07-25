/*
169. Majority Element
=====================
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const numsMap = {};
    for (let i = 0; i < nums.length; i++) {
        let elem = nums[i];
        numsMap[elem] = numsMap[elem] ? ++numsMap[elem] : 1;
    }

    let majorElem = 0;
    let majorElemIndex = 0;
    for (let key in numsMap) {
        if (numsMap[key] > majorElem) {
            majorElem = numsMap[key];
            majorElemIndex = key;
        }
    }

    return Number(majorElemIndex);
};

let nums = [3, 2, 3]; // 3
console.log(majorityElement(nums));

nums = [2, 2, 1, 1, 1, 2, 2]; // 2
console.log(majorityElement(nums));
