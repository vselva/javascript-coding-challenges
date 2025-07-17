const removeDuplicates = (array) => {
    if (!Array.isArray(array) || array.length <= 1) {
        return null;
    }

    let removed = [];
    let arrayMap = {};
    let j = 0;

    const length = array.length;
    for (let i = 0; i < length; i++) {
        let char = array[i];
        if (!arrayMap[char]) {
            arrayMap[char] = 1;
            removed[j++] = char;
        }
    }
    return removed;
};

console.log(
    removeDuplicates([0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 2, 2, 1, 0])
);
