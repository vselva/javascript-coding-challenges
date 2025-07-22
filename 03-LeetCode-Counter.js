/* 
Write a function createCounter. 
It should accept an initial integer init. 
It should return an object with three functions.

The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

/*
 * @params {integer}
 * @return {increment: Function, decrement: Function, reset: Function}
 */
const createCounter = (init) => {
    let count = init;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        reset() {
            count = init;
            return count;
        },
    };
};

const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log("");
console.log(counter.reset());
console.log("");
console.log(counter.decrement());
console.log(counter.decrement());
