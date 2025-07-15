const flattenArray = (array) => {
  let flatten = [];
  const length = array.length;
  let j = 0;
  for (let i = 0; i < length; i++) {
    let item = array[i];
    if (!Array.isArray(item)) {
      flatten[j++] = item;
    } else {
      for (let k = 0; k < item.length; k++) {
        flatten[j++] = item[k];
      }
    }
  }
  return flatten;
};

let array = [1, 2, [3, 4], [5, 6]];
console.log(flattenArray(array));
