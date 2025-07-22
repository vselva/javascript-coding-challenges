// Write a function createHelloWorld.
// It should return a new function that always returns "Hello World".

/*
 * @return {Function}
 */
function returnHello() {
    return (...args) => {
        return "Hello World";
    };
}

const f = returnHello();
const ret = f();
console.log(ret);
