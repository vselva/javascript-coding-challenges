// Function to check if a number is an Armstrong number
const isArmstrongNumber = (number) => {
    const str = number.toString(); // Convert number to string to access individual digits
    const numDigits = str.length;  // Number of digits in the number
    let sum = 0;

    // Calculate the sum of each digit raised to the power of number of digits
    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(str[i]);
        sum += Math.pow(digit, numDigits);
    }

    return sum === number; // Return true if it's an Armstrong number
};

// Print Armstrong numbers from 0 to 999
console.log("Armstrong numbers between 0 and 9999:");
for (let i = 0; i < 10000; i++) {
    if (isArmstrongNumber(i)) {
        console.log(i);
    }
}
