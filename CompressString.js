// Function to compress a string by counting consecutive repeating characters
// Example: 'aaabbbccc' -> 'a3b3c3'
// If the compressed string is not shorter than the original, return the original string
function compressString(inStr) {
    // Initialize compressed result string
    let compStr = '';
     // Initialize character count to 1
    let count = 1;

    // Loop through the input string
    for (let i=0; i<inStr.length; i++) {
        // Check if the current character is the same as the next one
        if (inStr[i] == inStr[i+1]) {
            count++; // If yes, increase the count
        } else {
            // Append the character and its count to the compressed string
            compStr += inStr[i];
            compStr+=count;
            count=1; // Reset count for the next character group
        }
    }

    // Return the compressed string only if it's shorter than the original
    return compStr.length < inStr.length ? compStr : inStr;
}

// Test case 1: String with repeated characters
const inStr1 = 'aAbbcccddddeeeeeffffff';
console.log(`${inStr1}: Compressed String: ${compressString(inStr1)}`);

// Test case 2: String with no repeating characters
const inStr2 = 'abcdef';
console.log(`${inStr2}: Compressed String: ${compressString(inStr2)}`);
