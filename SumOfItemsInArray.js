// Function to calculate the sum of all elements in an array
function sumOfAllInArray(inArr) {
    // Check if the input is an array
    if (!Array.isArray(inArr)) {
        return '- Invalid input: Please provide an array';
    }

    let sum = 0;  // Initialize sum to zero
    let i = 0;    // Initialize index to zero

    // Loop through the array using a while loop until an undefined value is reached
    while (inArr[i] !== undefined) {
        sum = sum + inArr[i];  // Add the current element to sum
        i++;                   // Move to the next element
    }

    // Return the total sum of all elements
    return sum;
}

// Test Case 1: Normal array with positive, zero, and negative numbers
let inArr = [6, 9, 8, 0, 8, -1];
console.log(`Sum of Array [ ${inArr} ] is ${sumOfAllInArray(inArr)}`);

// Test Case 2: Invalid input (number instead of array)
inArr = 9;
console.log(`Sum of Array [ ${inArr} ] is ${sumOfAllInArray(inArr)}`);

// Test Case 3: Empty array (should safely return 0)
inArr = [];
console.log(`Sum of Array [ ${inArr} ] is ${sumOfAllInArray(inArr)}`);
