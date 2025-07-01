const twoSum = (array, target) => {
  let sum2 = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] + array[j] == target) return [array[i], array[j]];
    }
  }

  return sum2;
};

console.log(twoSum([5, 4, 3, 2, 1], 3));
