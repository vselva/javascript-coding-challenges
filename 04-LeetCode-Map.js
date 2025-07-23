/*
2635. Apply Transform Over Each Element in Array
================================================
Given an integer array arr and a mapping function fn, 
return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built -in Array.map method.
*/

array = [1, 2, 3];
const mapped = array.map((el) => el * 2);
console.log(mapped);

Array.prototype.mymap = function (cb) {
    for (let i = 0; i < this.length; i++) {
        this[i] = cb(this[i], i, this);
    }
    return this;
};
const mymapped = array.mymap((el) => el * 2);
console.log(mymapped);

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        number.push(fn(arr[i], i));
    }
    return number;
};
const mapping = map([1, 2, 3], (el) => el * 2);
console.log(mapping);
