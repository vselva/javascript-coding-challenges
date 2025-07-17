// sort by object items
const sortObjectItem = (obj) => {
  const sorted = obj.sort((el1, el2) => el1.id - el2.id);
  return sorted;
};

const myObj = [
  { id: 1, name: "Selva" },
  { id: 3, name: "Priya" },
  { id: 2, name: "Arun" },
  { id: 5, name: "Kumar" },
  { id: 4, name: "Meena" },
];
sortObjectItem(myObj).map((e) => console.log(e.id, e.name));
