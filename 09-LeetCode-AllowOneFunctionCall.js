/*
2666. Allow One Function Call:
==============================

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
*/

function once(fn) {
    let called = false;
    return function (...args) {
        if (called) {
            return undefined;
        }
        called = true;
        return fn(...args);
    };
}

const sum = (a, b) => a + b;

const res = once(sum);

console.log(res(1, 2));
console.log(res(1, 2));
console.log(res(1, 2));
