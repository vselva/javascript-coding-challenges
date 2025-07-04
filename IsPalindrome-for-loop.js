function isPalindrome(string) {
  string = string.toLowerCase();
  length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] != string[length - i - 1]) return false;
  }
  return true;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("Maddam"));
