// Function to reverse a string manually (without using built-in functions)
function reverseString(str) {
    let reversedString = '';

    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversedString += str[i];
    // }

    // alternate method using for...of loop
    for (c of str) {
        reversedString = c + reversedString;
    }

    return reversedString;
}

// Function to reverse a string using built-in JavaScript methods
function reverseStringWithBuildIn(str) {
    // split('') converts the string to an array of characters
    // reverse() reverses the array
    // join('') joins the characters back into a string
    return str.split('').reverse().join('');
}

// Test string
let originalString = '123456789';

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