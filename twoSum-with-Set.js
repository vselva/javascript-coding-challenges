const twoSum = (array, target) => {
  let sum2 = [];
  let set = new Set(array);
  
  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i];
    if(set.has(diff)) 
      return [array[i], diff]
  }
  
  return sum2;
}

console.log(twoSum([5, 4, 3, 2, 1], 3));
