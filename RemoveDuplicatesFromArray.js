// Function to remove duplicate values from an array
function RemoveDuplicatesFromArray(inArr) {
    // Validate if input is an array
    if (!Array.isArray(inArr))
        return 'Not an array.'; // Return message if input is invalid

    if (inArr.length === 0)
        return 'Empty Array.'

    let outArr = [];  // To store unique values
    let seen = {};    // Object to track seen values
    let i = 0;        // Input array index
    let j = 0;        // Output array index

    // Iterate through input array using 'in' to check if index exists
    while (i in inArr) {
        let item = inArr[i];

        // If item is not already encountered, add it to seen and output array
        if (!seen[item]) {
            seen[item] = true;
            outArr[j] = item;
            j++;
        }

        i++; // Move to next index
    }
    
    return outArr; // Return array with unique values
}

// Test cases

let inArr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
console.log(`[ ${inArr} ]: After removing duplicates => ${RemoveDuplicatesFromArray(inArr)}`);

inArr = [1, '2', undefined, 'string', 'string', null, null, undefined, undefined];
console.log(`[ ${inArr} ]: After removing duplicates => ${RemoveDuplicatesFromArray(inArr)}`);

inArr = [];
console.log(`[ ${inArr} ]: After removing duplicates => ${RemoveDuplicatesFromArray(inArr)}`);

inArr = 8;
console.log(`[ ${inArr} ]: After removing duplicates => ${RemoveDuplicatesFromArray(inArr)}`);
