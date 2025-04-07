// Function to find the length of the shortest string in the array
function findShortStrLengthInArray(inArr) {
    // Assume the first string is the shortest to start with
    let shortestString = inArr[0];

    // Loop through the array till the second-last index
    for (let i = 0; i <= inArr.length - 2; i++) {
        // Compare the next string's length with the current one
        if (inArr[i + 1].length < inArr[i].length) {
            // If next string is shorter, update the shortest string
            shortestString = inArr[i + 1];
        }
    }

    // Return the length of the shortest string
    return shortestString.length;
}

// Function to find the longest common prefix among all strings in the array
function longerPrefixInArray(inArr) {
    // If the array is empty, return an empty string
    if (inArr.length === 0) return '';

    // Get the length of the shortest string to limit comparisons
    let shortestStringLength = findShortStrLengthInArray(inArr);

    // Initialize an empty string to store the common prefix
    let commonPrefix = '';

    // Loop through each pair of strings (current and next)
    for (let i = 0; i <= inArr.length - 2; i++) {
        // Reset commonPrefix for the current pair
        commonPrefix = '';

        // Compare characters of the current string and the next string
        for (let j = 0; j <= shortestStringLength; j++) {
            // If characters match, add to the prefix
            if (inArr[i][j] == inArr[i + 1][j])
                commonPrefix += inArr[i][j];
            else
                break; // Stop comparison if characters mismatch
        }

        // Update the shortestStringLength to the latest commonPrefix length
        // to avoid comparing more than the current known common prefix
        shortestStringLength = commonPrefix.length;
    }

    // Return the final common prefix found
    return commonPrefix;
}

// Test Case 1
let inArr1 = ['flower', 'flow', 'floight123'];
console.log(`The longest Prefix of [${inArr1}] is "${longerPrefixInArray(inArr1)}"`);

// Test Case 2 (no common prefix)
let inArr2 = ['mango', 'manny', 'management'];
console.log(`The longest Prefix of [${inArr2}] is "${longerPrefixInArray(inArr2)}"`);
