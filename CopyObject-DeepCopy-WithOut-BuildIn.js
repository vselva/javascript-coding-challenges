const deepClone = (object) => {
  let copied = {};

  for (let key in object) {
    let value = object[key];
    if (typeof value == "object") {
      copied[key] = deepClone(value);
    } else {
      copied[key] = value;
    }
  }
  return copied;
};

const obj = {
  name: "Selva",
  age: 23,
  address: {
    number: 123,
    street: "Rice Mill Street",
    area: "Kandigai",
    pincode: 123456,
  },
};
const cloned = deepClone(obj);
console.log(cloned);
console.log(obj === cloned);
console.log(obj.address === cloned.address);
