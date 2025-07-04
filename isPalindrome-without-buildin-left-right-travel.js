function isPalindrome(string) {
  string = string.toLowerCase();
  left = 0;
  right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("Madam1"));
