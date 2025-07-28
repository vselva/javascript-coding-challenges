let obj = {
    name: "selva",
    age: 24,
    hobbies: ["reading", "writting", "drawing"],
};

let { age, ...removed } = obj;
console.log(removed);
