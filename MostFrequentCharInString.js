const mostFreqChar = (string) => {
    let strMap = {};
    const length = string.length;

    for (let i = 0; i < length; i++) {
        let char = string[i];
        if (!strMap[char]) {
            strMap[char] = 1;
        } else {
            strMap[char]++;
        }
    }

    let max = 0;
    let maxChar = "";

    for (char of Object.keys(strMap)) {
        if (strMap[char] > max) {
            max = strMap[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(mostFreqChar("abbcccddddeeeeeffgghh"));
