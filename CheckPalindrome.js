const isPalindrome = (orgStr) => {
  const cleanStr = orgStr.toLowerCase();
  let revStr = reverseString(cleanStr);
  return cleanStr === revStr
    ? `✅ ${orgStr} is Palindrome`
    : `❌ ${orgStr} is not Palindrome`;
};
