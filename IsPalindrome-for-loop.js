function isPalindrome(string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-z0-9]/gi, ""); // cleanup
    length = string.length;
    for (let i = 0; i < length / 2; i++) {
        if (string[i] != string[length - i - 1]) return false;
    }
    return true;
}

console.log(isPalindrome("Mad am?"));
console.log(isPalindrome("Maddamy"));
