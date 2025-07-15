customFlat = (inArr) => {
  let outArr = [];
  let j = 0;
  for (let i = 0; i < inArr.length; i++) {
    if (Array.isArray(inArr[i])) {
      // outArr.push(...inArr[i]);
      for (let k = 0; k < inArr[i].length; k++) {
        outArr[j++] = inArr[i][k];
      }
    } else {
      outArr[j++] = inArr[i];
      // outArr.push(inArr[i]);
    }
  }
  return outArr;
};

const inArr = [1, 2, [3, 4], [5, 6]];
console.log(customFlat(inArr));
