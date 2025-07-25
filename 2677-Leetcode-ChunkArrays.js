/*
2677. Chunk Array
=================
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let res = [];
    let i = 0;
    while (i < arr.length) {
        let innerArray = [];
        for (j = i; j < size + i; j++) {
            if (arr[j] == undefined) break;
            innerArray.push(arr[j]);
        }
        res.push(innerArray);
        i = i + size;
    }
    return res;
};

arr = [1, 9, 6, 3, 2];
size = 3;
console.log(chunk(arr, size)); // [[1,9,6],[3,2]]

arr = [1, 2, 3, 4, 5];
size = 1;
console.log(chunk(arr, size)); // [[1],[2],[3],[4],[5]]

arr = [8, 5, 3, 2, 6];
size = 6;
console.log(chunk(arr, size)); // [[8,5,3,2,6]]

arr = [];
size = 1;
console.log(chunk(arr, size)); // []
