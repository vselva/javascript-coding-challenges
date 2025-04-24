// Function to merge two arrays without using .length or built-in functions
function mergeTwoArrays(inArr1, inArr2) {
    // Check if both inputs are arrays
    if (!Array.isArray(inArr1) || !Array.isArray(inArr2)) {
        return '- Invalid input: Both parameters must be arrays.';
    }

    let arrLength1 = 0;

    // Find the length of inArr1 by iterating until undefined is encountered
    let i = 0;
    while (i in inArr1) {
        arrLength1++;
        i++;
    }

    i = 0;
    // Append elements of inArr2 to the end of inArr1
    while (i in inArr2) {
        inArr1[arrLength1 + i] = inArr2[i];
        i++;
    }

    // Return the merged array
    return inArr1;
}

// Test Case 1: Regular array
let inArr1 = [1, 2, 3];
let inArr2 = [4, 5];
console.log(`The Merge of Array [ ${inArr1} ] and [ ${inArr2} ] is [ ${mergeTwoArrays(inArr1, inArr2)} ]`);

// Test Case 2: One array is empty
inArr1 = [];
inArr2 = [4, 5];
console.log(`The Merge of Array [ ${inArr1} ] and [ ${inArr2} ] is [ ${mergeTwoArrays(inArr1, inArr2)} ]`);

// Test Case 3: Both arrays are empty
inArr1 = [];
inArr2 = [];
console.log(`The Merge of Array [ ${inArr1} ] and [ ${inArr2} ] is [ ${mergeTwoArrays(inArr1, inArr2)} ]`);

// Test Case 4: Invalid input (non-array types)
inArr1 = '';
inArr2 = 4;
console.log(`The Merge of Array [ ${inArr1} ] and [ ${inArr2} ] is [ ${mergeTwoArrays(inArr1, inArr2)} ]`);
