// sort by object items
const sortObjectItem = (obj) => {
    const sorted = obj.sort((el1, el2) => el1.name.localeCompare(el2.name));
    /* const sorted = obj.sort((el1, el2) => {
        return el1.name > el2.name ? 1 : el1.name == el2.name ? 0 : -1;
    }); */
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
