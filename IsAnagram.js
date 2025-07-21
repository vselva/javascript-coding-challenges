function getCharMap(string) {
    let strMap = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        strMap[char] = strMap[char] ? ++strMap[char] : 1;
    }
    return strMap;
}

function isAnagram(str1, str2) {
    let str1charMap = getCharMap(str1);
    let str2charMap = getCharMap(str2);

    for (key in str1charMap) {
        if (str1charMap[key] !== str2charMap[key]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("selvaa", "aavles"));
console.log(isAnagram("selvaa", "aavls"));
