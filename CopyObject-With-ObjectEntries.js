const objCopy = (object) => {
  let copied = {};
  let entries = Object.entries(object);

  for (let item of entries) {
    copied[item[0]] = item[1];
  }
  return copied;
};

const obj = {
  name: "Selva",
  age: 23,
  address: "Kandigai",
};
console.log(objCopy(obj));
