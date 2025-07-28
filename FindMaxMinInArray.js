const findMaxMin = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (value of arr) {
        if (value < min) min = value;
        if (value > max) max = value;
    }
    return [min, max];
};

console.log(findMaxMin([-10, 2, -8, 7, -723, 173, -2, 9]));
