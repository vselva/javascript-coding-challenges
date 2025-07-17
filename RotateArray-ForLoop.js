const rotateArray = (array, n) => {
    let rotated = [];
    const length = array.length;
    for (let i = 0; i < n; i++) {
        rotated = [];
        rotated[0] = array[length - 1];
        for (let j = 1; j < length; j++) {
            rotated[j] = array[j - 1];
            console.log(rotated);
        }
        array = rotated;
    }
    return rotated;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));
