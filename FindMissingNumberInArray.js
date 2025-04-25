function findMissingNumberInArray(inArr) {
    let n = 1; // Start with 1 as the first number
    let actualSum = 0;
    let expectedSum = 0;

    // Calculate the number of elements in the array (manual way)
    for (let i in inArr) {
        n++; // Count the elements in the array
        actualSum += inArr[i]; // Add each element to the actual sum
    }

    // Calculate the expected sum for numbers from 1 to n+1
    expectedSum = (n) * (n + 1) / 2;

    // Alternate method to calculate expectedSum (without using the formula)
    // while(n) {
    //     expectedSum = expectedSum + n;
    //     n--;
    // }

    // Return the difference between expected sum and actual sum, which is the missing number
    return expectedSum - actualSum;
}

let inArr = [1, 4, 2, 3, 6]; // The missing number should be 5 in this case
console.log(`The missing number in Array [ ${inArr} ]is ${findMissingNumberInArray(inArr)}`);
