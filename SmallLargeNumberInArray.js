// Function to find the largest number in an array
function largestNumberInArray(inArr) {
    let largestNumber = inArr[0];  // Assume the first element is the largest

    // Start from index 1 and compare each value with the current largest
    /* for (let j = 1; j <= inArr.length - 1; j++) {
        if (inArr[j] > largestNumber) {
            largestNumber = inArr[j];  // Update if a larger value is found
        }
    } */
   let i = 1;
    while(inArr[i] !== undefined) {
        if (inArr[i] > largestNumber) {
            largestNumber = inArr[i];
        }
        i++;
    }

    return largestNumber;
}

// Function to find the smallest number in an array
function smallestNumberinArray(inArr) {
    let smallestNumber = inArr[0];  // Assume the first element is the smallest

    // Start from index 1 and compare each value with the current smallest
    /* for (let j = 1; j < inArr.length; j++) {
        if (inArr[j] < smallestNumber) {
            smallestNumber = inArr[j];  // Update if a smaller value is found
        }
    } */
    let i = 1;
    while(inArr[i] !== undefined) {
        if(inArr[i] < smallestNumber) {
            smallestNumber = inArr[i];
        }
        i++;
    }

    return smallestNumber;
}

// Example array to test
const inArr = [2, 5, -3, 3, 9, 0, -9];

// Call the functions and print results
console.log(`Largest number of ${inArr} is ${largestNumberInArray(inArr)}`);
console.log(`Smallest number of ${inArr} is ${smallestNumberinArray(inArr)}`);
