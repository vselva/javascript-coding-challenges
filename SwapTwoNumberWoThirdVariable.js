let a = -10;
let b = 5;

// Step 1: Add a and b, store the result in a
// a becomes -10 + 5 = -5
a = a + b;

// Step 2: Subtract the new b from the new a
// b becomes -5 - 5 = -10 (original value of a)
b = a - b;

// Step 3: Subtract the new b (which is now original a) from new a
// a becomes -5 - (-10) = 5 (original value of b)
a = a - b;

console.log(`a = ${a}, b = ${b}`); // Output: a = 5, b = -10
