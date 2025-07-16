const countCharsInString = (string) => {
  let arrayMap = {};
  for (let char of string) {
    if (arrayMap[char]) {
      arrayMap[char]++;
    } else {
      arrayMap[char] = 1;
    }
  }

  return arrayMap;
};
console.log(countCharsInString("1223334444"));
