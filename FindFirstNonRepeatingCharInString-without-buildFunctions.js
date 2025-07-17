const findFirstNonRepeatingCharInString = (string) => {
    let map = {};

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        map[char] = map[char] ? ++map[char] : 1;
    }

    for (let char of string) {
        if (map[char] == 1) return char;
    }

    return "";
};

console.log(findFirstNonRepeatingCharInString("aabbbccccdddddeffgggghhiijjkk"));
