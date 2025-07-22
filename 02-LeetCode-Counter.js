// Given an integer n, return a counter function.
// This counter function initially returns n and then
// returns 1 more than the previous value every subsequent time it is called
// (n, n + 1, n + 2, etc).

/*
 * @param {number} n
 * @return {Function} counter
 */
const createCounterFunction = (n) => {
    return function () {
        return n++;
    };
};

const f = createCounterFunction(10);
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
