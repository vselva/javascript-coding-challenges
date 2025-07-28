const rotate = (array, n) => {
    let rotated = [];
    let length = array.length;
    for (let i = 0; i < n; i++) {
        let last = array[length - 1];
        for (let k = length - 1; k >= 0; k--) {
            array[k] = array[k - 1];
        }
        array[0] = last;
    }
    return array;
};

console.log(rotate([1, 2, 3, 4], 2));
