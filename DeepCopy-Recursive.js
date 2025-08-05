const deepClone = (input) => {
    if (typeof input !== "object" || input === null) {
        return input;
    }
    let copy = Array.isArray(input) ? [] : {};
    for (key in input) {
        let value = input[key];
        copy[key] = deepClone(value);
    }
    return copy;
};

const original = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        additional: { short_name: "Villa" },
    },
    hobbies: ["reading", "cycling"],
};
let copied = deepClone(original);
console.log(copied);

// testing
original.hobbies.push("playing");
console.log(original);
console.log(copied);
