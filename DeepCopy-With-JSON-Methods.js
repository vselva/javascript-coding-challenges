function deepCopy(object) {
  let copied = JSON.parse(JSON.stringify(object));
  return copied;
}

const myObj = {
  name: "Selva",
  age: 30,
  married: true,
  address: {
    no: 123,
    street: "Rice Mill Street",
    area: "Kandigai",
    pin: 600127,
  },
};

const copiedObj = deepCopy(myObj);
console.log(copiedObj);
console.log(myObj === copiedObj ? "not copied" : "copied");
console.log(myObj.address === copiedObj.address ? "not copied" : "copied");
