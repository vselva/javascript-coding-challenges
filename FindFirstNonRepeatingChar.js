const findFirstNonRepeatingChar = (string) => {
    let strMap = {};
    for (ch of string) {
        strMap[ch] = (strMap[ch] || 0) + 1;
    }
    console.log(strMap);

    for (key of string) {
        if (strMap[key] == 1) return key;
    }
};

console.log(findFirstNonRepeatingChar("1122333444455556777888990"));
