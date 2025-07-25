const twoSum = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
};

console.log(twoSum([1, 2, 3, 4, 5], 8));
