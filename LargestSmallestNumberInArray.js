// Function to find the largest and smallest number in an array in a single pass
findLargestSmallestNumInArr = (inArr) => {
    // Initialize largest and smallest to the first element of the array
    let largest = inArr[0];
    let smallest = inArr[0];

    // Loop through each number in the array using for...of
    for (num of inArr) {
        // Update largest if the current number is greater than the current largest
        largest = num > largest ? num : largest;

        // Update smallest if the current number is smaller than the current smallest
        smallest = num < smallest ? num : smallest;
    }

    // Return the largest and smallest numbers as an array
    return [largest, smallest];
}

// Example array to test the function
let inArr = [1, 4, 0, 34, -45, 100, -100];

// Destructure the returned array to get the largest and smallest numbers
const [largest, smallest] = findLargestSmallestNumInArr(inArr);

// Output the result to the console
console.log(`largest: ${largest}, smallest: ${smallest}`);
