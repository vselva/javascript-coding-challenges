const objCopy = (object) => {
  let copied = {};
  let keys = Object.keys(object);

  for (let key of keys) {
    copied[key] = object[key];
  }
  return copied;
};

const obj = {
  name: "Selva",
  age: 23,
  address: "Kandigai",
};
console.log(objCopy(obj));
