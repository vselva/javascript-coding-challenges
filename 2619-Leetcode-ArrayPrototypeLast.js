/*
2619. Array Prototype Last
==========================
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.
*/

Array.prototype.last = function () {
    return this.length == 0 ? -1 : this[this.length - 1];
};

const array = [1, 2, 3, 4, 5, 9];
const last = array.last();
console.log(last);

const array2 = [];
const last2 = array2.last();
console.log(last2);
