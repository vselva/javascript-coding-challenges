const countRepeatingCharsInString = string => {
    let repeatingChars = '';
    let count = 1;
    let char = string[0];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++;
            char = string[i];
        } else {
            repeatingChars += count + char;
            count = 1;
            char = string[i + 1];
        }
    }

    return repeatingChars;
};

console.log(countRepeatingCharsInString('abbcccddddeeeee'));
