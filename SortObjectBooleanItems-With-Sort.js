// sort by object items
const sortObjectItem = (obj) => {
    const sorted = obj.sort((el1, el2) => {
        if (el1.active && !el2.active) {
            return -1;
        } else if (!el1.active && el2.active) {
            return 1;
        } else {
            return 0;
        }
    });
    return sorted;
};

const myObj = [
    { id: 1, name: "Selva", active: true },
    { id: 3, name: "Priya", active: false },
    { id: 2, name: "Arun", active: true },
    { id: 5, name: "Kumar", active: false },
    { id: 4, name: "Meena", active: true },
];
sortObjectItem(myObj).map((e) => console.log(e.id, e.name, e.active));
