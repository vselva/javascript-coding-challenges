function flattenArray(array) {
  return array.flat(2);
}

console.log(flattenArray([1, 2, [3, 4, [5, 6], 7, 8], 9]));
