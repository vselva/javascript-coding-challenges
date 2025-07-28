const merge = (obj1, obj2) => {
    let merged = {};
    //return Object.assign({}, obj1, obj2)
    return { ...obj1, ...obj2 };
};

const obj1 = {
    name: "Alice",
    age: 25,
};

const obj2 = {
    gender: "male",
    education: "degree",
};

console.log(merge(obj1, obj2));
