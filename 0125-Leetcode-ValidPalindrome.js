/*
125. Valid Palindrome
=====================
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleaned = s.toLowerCase(s).replace(/[^a-z0-9]/gi, "");
    return cleaned === cleaned.split("").reverse().join("");
};

let s = "A man, a plan, a canal: Panama"; // true
console.log(isPalindrome(s));
s = "race a car"; // false
console.log(isPalindrome(s));
s = " "; // true
console.log(isPalindrome(s));
s = "0P"; // false
console.log(isPalindrome(s));
