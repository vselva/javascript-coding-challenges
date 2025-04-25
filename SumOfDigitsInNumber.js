// Function to calculate the sum of digits of a number (supports negative numbers)
// without using built-in methods like Math.abs or Math.floor
function sumOfDigits(number) {
    let sum = 0;

    // Loop until number becomes 0
    while (number !== 0) {
        // Extract last digit and add to sum
        sum = sum + (number % 10);

        // Remove the last digit using truncation logic
        let temp = number / 10;
        number = temp - (temp % 1); // Same as truncation
    }

    // Return the absolute value of the sum
    return sum < 0 ? -sum : sum;
}

// Test inputs
let input = -12345;
console.log(`Sum of digits = ${sumOfDigits(input)}`);  // Output: 15

input = 12345;
console.log(`Sum of digits = ${sumOfDigits(input)}`);  // Output: 15
