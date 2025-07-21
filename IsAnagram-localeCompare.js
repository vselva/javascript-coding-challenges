const sort = (string) => {
    let splitted = string.split("");
    for (let i = 0; i < splitted.length; i++) {
        for (let j = i + 1; j < splitted.length; j++) {
            if (splitted[i].localeCompare(splitted[j]) === 1) {
                let temp = splitted[i];
                splitted[i] = splitted[j];
                splitted[j] = temp;
            }
        }
    }
    return splitted.join("");
};

const isAnagram = (str1, str2) => {
    let str1sorted = sort(str1);
    let str2sorted = sort(str2);

    console.log(str1sorted);
    console.log(str2sorted);

    return str1sorted === str2sorted;
};

console.log(isAnagram("madam", "mdmaa"));
console.log(isAnagram("madam", "damma1"));
