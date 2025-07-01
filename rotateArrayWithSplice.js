const rotateArray = (array, n) => {
  let rotated = [];
  const length = array.length;
  let spliced = array.splice(length - n, n);
  rotated = [...spliced, ...array];
  return rotated;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));