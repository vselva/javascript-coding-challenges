const charCountInString = (string) => {
    let charMap = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        charMap[char] = charMap[char] ? ++charMap[char] : 1;
    }

    return charMap;
};

console.log(charCountInString("122333444455555666666"));
