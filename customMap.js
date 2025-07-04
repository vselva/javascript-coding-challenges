Array.prototype.mymap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

let array = [1, 2, 3];
console.log(array.map((el) => el * 2));
console.log(array.mymap((el) => el * 2));
