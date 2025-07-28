const isPalindrome = (str) => {
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9]/gi, "");
    rev = str.split("").reverse().join("");
    return str === rev;
};

console.log(isPalindrome("ma da?m"));
console.log(isPalindrome("madam1"));
