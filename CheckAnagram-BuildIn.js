const checkAnagram = (str1, str2) => {
    let str1sorted = str1.split("").sort().join("");
    let str2sorted = str2.split("").sort().join("");

    return str1sorted === str2sorted;
};

console.log(checkAnagram("madam", "mdmaa"));
console.log(checkAnagram("madam", "mdma"));
