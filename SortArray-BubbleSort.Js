// bubble sort
const sortArray = (array) => {
  const length = array.length;
  for (let i = 1; i < length; i++) {
    if (array[i - 1] > array[i]) {
      let temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
    }
  }
  return array;
};

console.log(sortArray([-10, 5, 0, 1, 2, 1]));
