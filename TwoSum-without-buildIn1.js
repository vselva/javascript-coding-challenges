const twoSum = (array, target) => {
  let sum2 = [];
  
  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i];
    for (let j = i; j < array.length; j++) {
      if(diff == array[j]) return [array[i], array[j]];
    }
  }
  
  return sum2;
}

console.log(twoSum([5, 4, 3, 2, 1], 3));
