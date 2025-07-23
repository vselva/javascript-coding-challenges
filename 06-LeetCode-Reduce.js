/*
2626. Array Reduce Transformation:
==================================
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: 
val = fn(init, nums[0]), 
val = fn(val, nums[1]), 
val = fn(val, nums[2]), ... until every element in the array has been processed. 
The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/

function reducer(nums, init, fn) {
    const length = nums.length;
    if (length <= 1) return init;

    let acc = init;
    for (let i = 0; i < length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
}

const arr = [1, 2, 3, 4, 5];
const add = (acc, current) => acc + current;
const mul = (acc, current) => acc * current;

const a = reducer(arr, 0, add);
console.log(a);

const m = reducer(arr, 1, mul);
console.log(m);
