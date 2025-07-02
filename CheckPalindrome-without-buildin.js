const isPalindrome = (string) => {
  let checkIsPalindrome = true;
  const length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("baddab"));
console.log(isPalindrome("notpalindrome"));
console.log(isPalindrome("11211"));
