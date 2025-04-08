// Function to convert a lowercase character to uppercase using ASCII values
function toUpperCase(inChar) {
    const charCode = inChar.charCodeAt(); // Get ASCII value of the character

    // Check if character is lowercase (ASCII range for 'a' to 'z' is 97 to 122)
    if(charCode >= 97 && charCode <= 122) {
        let capsCharCode = charCode - 32; // Convert to uppercase by subtracting 32
        let capsChar = String.fromCharCode(capsCharCode); // Get character from ASCII code
        return capsChar;
    }

    return inChar; // If not lowercase, return the character as-is
}

// Function to convert an uppercase character to lowercase using ASCII values
function toLowerCase(inChar) {
    const inCharCode = inChar.charCodeAt(0); // Get ASCII value of the character

    // Check if character is uppercase (ASCII range for 'A' to 'Z' is 65 to 90)
    if(inCharCode >= 65 && inCharCode <= 90) {
        let lowerCharCode = inCharCode + 32; // Convert to lowercase by adding 32
        let lowerChar = String.fromCharCode(lowerCharCode); // Get character from ASCII code
        return lowerChar; 
    }

    return inChar; // If not uppercase, return the character as-is
}

// Function to convert a string to Title Case (first letter of each word is uppercase, rest are lowercase)
function toTitleCase(inStr) {
    if (!inStr || inStr.length === 0) return ''; // Handle empty string

    let titleCase = '';

    // Convert first character to uppercase and add to result
    titleCase += toUpperCase(inStr[0]);

    // Loop through the rest of the string
    for(let i = 1; i <= inStr.length - 1; i++) {
        // If the previous character is a space, capitalize the current character
        if(inStr[i - 1] === ' ') {
            titleCase += toUpperCase(inStr[i]);
        } else {
            // Otherwise, convert the current character to lowercase
            titleCase += toLowerCase(inStr[i]);
        }
    }

    return titleCase; // Return the final result
}

// Test the function with example strings
console.log(toTitleCase('aAb BcC'));              // Output: Aab Bcc
console.log(toTitleCase('this is sample TEXT'));  // Output: This Is Sample Text

/* 
 * 🔍 Important Concepts Used:
 *
 * 1. ASCII Value of Characters:
 *    - char.charCodeAt(0): Returns ASCII code of a character (e.g. 'a' => 97, 'A' => 65)
 * 
 * 2. Convert ASCII Code back to Character:
 *    - String.fromCharCode(charCode): Returns character from ASCII code
 *
 * 3. ASCII Difference Between Uppercase & Lowercase:
 *    - 'A' to 'a' is a difference of 32 → useful for manual conversion
 */