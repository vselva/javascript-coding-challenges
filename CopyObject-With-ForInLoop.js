const objCopy = (object) => {
  let copied = {};

  for (let key in object) {
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
