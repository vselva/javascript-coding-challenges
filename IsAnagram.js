const isAnagram = (str1, str2) => {
    const str1Map = {};

    for (let ch of str1) str1Map[ch] = str1Map[ch] ? ++str1Map[ch] : 1;

    for (let ch of str2) {
        if (!str1Map[ch]) return false;
        str1Map[ch]--;
        if (str1Map[ch] < 0) return false;
    }
    return true;
};

console.log(isAnagram("madam", "mdmaa"));
console.log(isAnagram("madam", "mdmaa1"));
console.log(isAnagram("madam2", "mdmaa1"));
