const mostFrequentElement = (array) => {
    let arrayMap = {};

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        if (!arrayMap[char]) {
            arrayMap[char] = 1;
        } else {
            arrayMap[char]++;
        }
    }

    let max = 0;
    let maxItem = "";
    for (let key of Object.keys(arrayMap)) {
        if (arrayMap[key] > max) {
            max = arrayMap[key];
            maxItem = key;
        }
    }
    return maxItem;
};

console.log(
    mostFrequentElement([
        1, 1, 1, 1, 1, 1, 11, 11, 11, 11, 100, 100, 101, 101, 101, 1, 2,
    ])
);
