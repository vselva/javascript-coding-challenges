/*
2634. Filter Elements from Array
================================
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]

filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

function filter(arr, fn) {
    const length = arr.length;
    const filtered = [];
    let j = 0;
    for (let i = 0; i < length; i++) {
        if (fn(arr[i], i, arr)) filtered[j++] = arr[i];
    }
    return filtered;
}

const arr = [10, 20, 30, 40];
const fn = (el, idx, arr) => el > 18;

const filtered = filter(arr, fn);
console.log(filtered);
