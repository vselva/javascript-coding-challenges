// Function to reverse a given integer 
// without using built-in functions like Math.floor
function reverseNumber(num) {
    let reversed = 0;

    // Loop until all digits are processed
    while (num !== 0) {
        // Get the last digit using modulus operator
        let lastDigit = num % 10;

        // Build the reversed number 
        // by shifting left and adding last digit
        reversed = reversed * 10 + lastDigit;

        // Remove the last digit from the original number
        num = removeLastDigit(num);
    }

    return reversed;
}

// Function to remove the last digit 
// from a number without using Math.floor or parseInt
function removeLastDigit(num) {
    let temp = num / 10;

    // Subtracting the decimal part to simulate truncation toward zero
    // Works for both positive and negative numbers
    return temp - (temp % 1);
}

// Test case 1: positive number
let input = 12345;
console.log(`Reversed number of ${input} is ${reverseNumber(input)}`);

// Test case 2: negative number
input = -12345;
console.log(`Reversed number of ${input} is ${reverseNumber(input)}`);
