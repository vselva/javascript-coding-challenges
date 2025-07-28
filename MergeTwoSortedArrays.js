const mergeSortedArray = (arr1, arr2) => {
    let sorted = [];
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
        sorted[k++] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        sorted[k++] = arr2[i];
    }
    console.log(sorted);

    for (let i = 0; i < sorted.length; i++) {
        for (let j = i; j < sorted.length; j++) {
            if (sorted[i] > sorted[j]) {
                let temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            }
        }
    }
    return sorted;
};

console.log(mergeSortedArray([1, 2, 3, 4, 5], [3, 4, 5, 6]));
