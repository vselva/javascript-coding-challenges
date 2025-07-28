const reverse = (arr) => {
    let reversed = [];
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[j++] = arr[i];
    }
    return reversed;
};

console.log(reverse([1, 2, 3, 4, 5]));
