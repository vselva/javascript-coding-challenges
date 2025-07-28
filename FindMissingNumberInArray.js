const findMissing = (array) => {
    const n = array.length + 1;
    correctTotal = (n * (n + 1)) / 2;

    let currentTotal = 0;
    for (char of array) {
        currentTotal += char;
    }

    return correctTotal - currentTotal;
};

console.log(findMissing([1, 2, 3, 4, 5, 7]));
