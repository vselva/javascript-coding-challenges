const removeDuplicates = (string) => {
    let seen = {};
    let cleaned = "";

    for (ch of string) {
        if (!seen[ch]) {
            seen[ch] = true;
            cleaned += ch;
        }
    }
    return cleaned;
};

console.log(removeDuplicates("1223334444"));
