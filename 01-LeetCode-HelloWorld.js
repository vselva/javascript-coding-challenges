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

// returning named function
function returnHello1() {
    function hello() {
        return "Hello World";
    }
    return { hello };
}
// without destructuring the object returned
const f1 = returnHello1();
console.log(f1.hello());
// destructuring the object returned
const { hello } = returnHello1();
console.log(hello());
