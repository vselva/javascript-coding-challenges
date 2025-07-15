// Function to sort an array in ascending order without using built-in functions
function OrderAsc(inArr) {
    let temp;

    // Outer loop to iterate through each element
    for (let i = 0; i <= inArr.length - 1; i++) {
        // Assume current element is the smallest
        let smallIndex = i;
        let small = inArr[i];

        // Inner loop to find the actual smallest element in the rest of the array
        for (let j = i; j <= inArr.length - 1; j++) {
            if (inArr[j] < small) {
                small = inArr[j];       // Update smallest value
                smallIndex = j;         // Update index of smallest
            }
        }

        // Swap the smallest found with current index i
        temp = inArr[i];
        inArr[i] = small;
        inArr[smallIndex] = temp;
    }

    return inArr; // Return the sorted array
}

// Test Input
let inArr = [5, 4, 2, -1, -3, -2, 0, 1, 3];

// Original array before sorting
console.log(inArr);

// Sorted result
console.log('Ascending Order:');
console.log(OrderAsc(inArr));
