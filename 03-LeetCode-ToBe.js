/*
Write a function expect that helps developers test their code. 
It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. 
If they are not equal, it should throw an error "Not Equal".

notToBe(val) accepts another value and returns true if the two values !== each other. 
If they are equal, it should throw an error "Equal".
*/

/*
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
    return {
        toBe(val2) {
            if (val === val2) return true;
            throw Error("Not Equal");
        },
        notToBe(val2) {
            if (val !== val2) return true;
            throw Error("Equal");
        },
    };
};

const test = expect(10);

try {
    console.log(test.toBe(10));
    console.log(test.toBe(11));
} catch (err) {
    console.log(err.message);
}

console.log("");
try {
    console.log(test.notToBe(11));
    console.log(test.notToBe(10));
} catch (err) {
    console.log(err.message);
}
