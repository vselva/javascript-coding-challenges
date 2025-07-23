/*
2632. Curry Function
*/

function curry(fn) {
    let numbers = [];
    return function curried(...args) {
        numbers = [...numbers, ...args];

        if (fn.length === numbers.length) {
            const res = fn(...numbers);
            numbers = [];
            return res;
        } else {
            return curried;
        }
    };
}

const mul = (a, b, c) => a * b * c;
const c = curry(mul);
console.log(c(1)(2)(3)); // 6
