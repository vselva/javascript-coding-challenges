const reverseArray = (array) => {
    let reversed = [];
    let j = 0;
    const length = array.length;

    for (let i = length - 1; i >= 0; i--) {
        //reversed[j++] = array[i];
        reversed.push(array[i]);
    }
    return reversed;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
