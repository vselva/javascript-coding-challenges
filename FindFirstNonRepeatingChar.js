function findFirstNonRepeatingChar(inStr) {
    // Step 1: Create an empty object to store character frequencies
    const repeatStr = {};

    // Step 2: Loop through the string to count how many times each character appears
    for (i = 0; i < inStr.length; i++) {
        const char = inStr[i];
        // If the character already exists in the object, increment its count
        // Otherwise, initialize it with 1
        repeatStr[char] = (repeatStr[char] || 0) + 1;
    }

    // Step 3: Loop through the string again to find the first character with a count of 1
    for (let i = 0; i < inStr.length; i++) {
        if (repeatStr[inStr[i]] === 1) {
            // This is the first non-repeating character
            return inStr[i];
        }
    }

    // Step 4: If no non-repeating character is found, return null
    return null;
}

// Test the function with a sample input
let inStr = 'sseelllvakumar';
console.log('First Non Repeating Char in String: ');
console.log(findFirstNonRepeatingChar(inStr)); // Output 