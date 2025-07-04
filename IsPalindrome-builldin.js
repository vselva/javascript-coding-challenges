const isPalindrome = (orgStr) => {
  const cleanStr = orgStr.toLowerCase();
  let revStr = cleanStr.split("").reverse().join("");
  console.log(revStr);
  return cleanStr === revStr
    ? `✅ ${orgStr} is Palindrome`
    : `❌ ${orgStr} is not Palindrome`;
};

console.log(isPalindrome("Madam"));
