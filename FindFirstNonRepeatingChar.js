function findFirstNonRepeatingChar(inStr) {
    const repeatStr = {};

    for (i = 0; i < inStr.length; i++) {
        const char = inStr[i];
        repeatStr[char] = (repeatStr[char] || 0) + 1;
    }

    for (let i = 0; i < inStr.length; i++) {
        if (repeatStr[inStr[i]] === 1) {
            return inStr[i];
        }
    }

    return null;
}

let inStr = "sseelllvakumar";
console.log("First Non Repeating Char in String: ");
console.log(findFirstNonRepeatingChar(inStr)); // Output
