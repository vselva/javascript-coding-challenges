// Function to reverse a string manually (without using built-in functions)
function reverseString(str) {
    let reversedString = ''; // Initialize an empty string to build the reversed string

    // Loop from the end of the original string to the beginning
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]; // Append each character in reverse order
    }

    return reversedString; // Return the reversed string
}

// Function to reverse a string using built-in JavaScript methods
function reverseStringWithBuildIn(str) {
    // split('') converts the string to an array of characters
    // reverse() reverses the array
    // join('') joins the characters back into a string
    return str.split('').reverse().join('');
}

// Test string
let originalString = 'This string will get reversed';

// Output using manual method
console.log('🔁 Reverse String without Built-In Functions');
let reversed = reverseString(originalString);
console.log('Original String: ' + originalString);
console.log('Reversed String: ' + reversed);

// Output using built-in method
console.log('\n⚙️ Reverse String with Built-In Functions');
reversed = reverseStringWithBuildIn(originalString);
console.log('Original String: ' + originalString);
console.log('Reversed String: ' + reversed);