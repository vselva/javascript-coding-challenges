function flattenArray(array) {
  let flatten = [];
  flatten = array.flatMap((item) => item);
  return flatten;
}

console.log(flattenArray([1, 2, [3, 4], [5, 6], 7]));
