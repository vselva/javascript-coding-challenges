Array.prototype.myFilter = function () {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      res.push(this[i]);
    }
  }
};

array = [10, 12, 18, 20];
// actual filter method
console.log(array.filter((e) => e >= 18));
// my custom filter
console.log(array.filter((e) => e >= 18));
