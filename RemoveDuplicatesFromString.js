// Function to remove duplicate characters from a string 
// while preserving their original order
function removeDuplicatesFromString(inStr) {
    // Check if input is null or an empty string
    // If yes, simply return an empty string
    if (!inStr || inStr.length == 0) return '';

    // Create an object to keep track of characters we've already seen
    // This helps us ensure each character only appears once in the output
    let seen = {};

    // This will hold the final string with duplicates removed
    let outStr = '';

    // Initialize a counter to go through the input string
    let i = 0;

    // Loop until we reach the end of the string
    while (true) {
        // Get the character at index `i`
        let char = inStr[i];

        // If character is undefined, we've reached the end of the string
        if (char == undefined) break;

        // If this character has not been added to the result yet
        if (!seen[char]) {
            seen[char] = true; // Mark it as seen
            outStr += char;    // Add it to the output string
        }

        // Move to the next character
        i++;
    }

    // Return the final result with duplicates removed
    return outStr; 
}

// --------------------- Test Cases ---------------------

// Test case 1: input with repeating lowercase letters
// Expected Output: "abc de" (only the first occurrence of each letter is kept)
inStr = 'abbcc dd eee';
console.log(`${inStr} => After Removing the duplicates: ${removeDuplicatesFromString(inStr)}`);

// Test case 2: input with numbers repeating
// Expected Output: "1234" (first of each number is kept)
inStr = '1223334444';
console.log(`${inStr} => After Removing the duplicates: ${removeDuplicatesFromString(inStr)}`);
