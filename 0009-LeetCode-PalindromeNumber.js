/*
9. Palindrome Number
====================
Companies
Hint
Given an integer x, return true if x is a palindrome, and false otherwise.
*/
const isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x !== 0)) return false;
    const org = x;
    let reverse = 0;
    while (x > 0) {
        reverse = reverse * 10 + (x % 10); //3
        x = Math.floor(x / 10); //12
    }
    return org === reverse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(1211));
