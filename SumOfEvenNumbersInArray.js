// Function to calculate the sum of all even numbers in an array
function sumOfEvenNumbersInArray(inArr) {
    // Check if the input is a valid array
    if (!Array.isArray(inArr)) {
        return '- InValid Array.';
    }

    let sum = 0;  // Initialize sum to zero
    let i = 0;    // Initialize index to zero

    // Loop through the array using a while loop until an undefined value is encountered
    while (inArr[i] !== undefined) {
        // Check if the current element is an even number
        if (inArr[i] % 2 == 0) {
            sum += inArr[i];  // Add even number to sum
        }
        i++;  // Move to the next element
    }

    // Return the total sum of even numbers
    return sum;
}

// Test Case 1: Array containing both even and odd numbers
let inArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Sum Of Even Numbers of the Array [ ${inArr} ] is ${sumOfEvenNumbersInArray(inArr)}`);

// Test Case 2: Empty array (should safely return 0)
inArr = [];
console.log(`Sum Of Even Numbers of the Array [ ${inArr} ] is ${sumOfEvenNumbersInArray(inArr)}`);

// Test Case 3: Invalid input (number instead of array)
inArr = 30;
console.log(`Sum Of Even Numbers of the Array [ ${inArr} ] is ${sumOfEvenNumbersInArray(inArr)}`);
