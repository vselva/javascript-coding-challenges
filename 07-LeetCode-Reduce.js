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

function reducer(nums, fn, init) {
    const length = nums.length;
    if (length == 0) return init;

    let acc = init;
    for (let i = 0; i < length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
}

const arr = [1, 2, 3, 4, 5];
const add = (acc, current) => acc + current;
const mul = (acc, current) => acc * current;

const a = reducer(arr, add, 0);
console.log(a);

const m = reducer(arr, mul, 1);
console.log(m);

//
function sum0(accum, curr) {
    return 0;
}

let array = [0];
let s = reducer(array, sum0, 25);
console.log(s); //0

array = [];
s = reducer(array, sum0, 25);
console.log(s); // exp 25

//
array = [13];
function sum(accum, curr) {
    return accum + curr;
}
s = reducer(array, sum, 25);
console.log(s); // exp 38
