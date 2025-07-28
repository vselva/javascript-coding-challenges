const moveAllZeros = (array) => {
    let zerocount = 0;
    let k = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            zerocount++;
        } else {
            array[k++] = array[i];
        }
    }

    while (zerocount--) {
        array[k++] = 0;
    }

    return array;
};

console.log(moveAllZeros([0, 1, 3, 0, 4, 4, 0]));
