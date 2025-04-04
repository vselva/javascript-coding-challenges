// Function to check if a string is a palindrome
const isPalindrome = (orgStr) => {
    // lowercase the string 
    const cleanStr = orgStr.toLowerCase();
    // Reverse the cleaned string
    let revStr = reverseString(cleanStr);
    // Compare and return result
    return cleanStr === revStr ? `✅ ${orgStr} is Palindrome` : `❌ ${orgStr} is not Palindrome`;
}

// Function to reverse a string without using built-in reverse()
function reverseString(orgStr) {
    let revStr = '';
    for (let i = orgStr.length-1; i >= 0; i--) {
        revStr += orgStr[i];
    }
    return revStr;
}

// Test cases
let orgStr = 'madam';
console.log(isPalindrome(orgStr));

orgStr = 'MaDam';
console.log(isPalindrome(orgStr));

orgStr = 'Madam1';
console.log(isPalindrome(orgStr));