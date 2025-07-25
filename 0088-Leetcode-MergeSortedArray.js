/*
88. Merge Sorted Array
======================
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let j = 0;
    for (let i = m; i < m + n; i++) {
        nums1[i] = nums2[j++];
    }

    for (let i = 0; i < m + n; i++) {
        for (let j = i + 1; j < m + n; j++) {
            if (nums1[i] > nums1[j]) {
                let temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp;
            }
        }
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
