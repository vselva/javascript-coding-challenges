// Function to sort an array in descending order (biggest to smallest)
function OrderDesc(inArr) {

    let length = inArr.length;  // Get the number of elements in the array

    // Loop through the array to place the largest element at the correct position
    for (let i = 0; i <= length - 1; i++) {
        let bigIndex = i;           // Assume current index has the biggest value
        let big = inArr[i];         // Store the value at that index

        // Find the biggest value from i to end of array
        for (let j = i; j <= length - 1; j++) {
            if (inArr[j] > big) {   // If we find a bigger value
                big = inArr[j];     // Update big to this new value
                bigIndex = j;       // Store its index
            }
        }

        // Swap the current element with the biggest value found
        let temp = inArr[i];
        inArr[i] = big;
        inArr[bigIndex] = temp;
    }

    return inArr; // Return the sorted array
}

// Sample input array
let inArr = [0, -3, 2, 1, -1, -2, 3, 0];

// Print the result after sorting
console.log(`${inArr} => After Sorting => ${OrderDesc(inArr)}`);
