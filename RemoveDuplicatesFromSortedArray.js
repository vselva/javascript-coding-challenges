const removeDuplicatesFromSortedArray = (array) => {
    const cleaned = [];
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) {
            cleaned[k++] = array[i];
        }
    }
    return cleaned;
};

console.log(
    removeDuplicatesFromSortedArray([0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6])
);
