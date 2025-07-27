/*
2625. Flatten Deeply Nested Array
=================================
Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
*/
/**
 * @param {any[]} arr
 * @param {number} n
 * @return {any[]}
 */
var flat = function (arr, n) {
    const result = [];

    const flatten = (array, depth) => {
        for (const item of array) {
            if (Array.isArray(item) && depth < n) {
                flatten(item, depth + 1);
            } else {
                result.push(item);
            }
        }
    };

    flatten(arr, 0);
    return result;
};

const input = [1, 2, 3, 4, [5, 6, [7, 8]], 9, 10];
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(flat(input, 3));
