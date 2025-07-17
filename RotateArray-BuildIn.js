const rotateArray = (array, n) => {
    let rotated = [];
    for (let i = 0; i < n; i++) {
        rotated = [array.pop(), ...array];
        array = rotated;
    }
    return rotated;
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));
