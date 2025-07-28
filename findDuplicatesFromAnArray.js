const findDuplicates = (array) => {
    let duplicates = [];
    let cleaned = [];
    let k = 0;
    let c = 0;
    let seen = {};

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (!seen[item]) {
            seen[item] = 1;
            cleaned[c++] = item;
        } else {
            if (seen[item] === 1) duplicates[k++] = item;
            seen[item]++;
        }
    }
    return [cleaned, duplicates];
};

console.log(
    findDuplicates([0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 8])
);
