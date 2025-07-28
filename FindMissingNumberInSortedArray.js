const findMissing = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] !== 1) return array[i] + 1;
    }
    return 0;
};

console.log(findMissing([1, 2, 3, 4, 6, 7, 8]));
