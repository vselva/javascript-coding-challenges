const clone = (input) => {
    if (typeof input !== "object" || input === null) {
        return input;
    }

    let copy = Array.isArray(input) ? [] : {};

    for (key in input) {
        if (input.hasOwnProperty(key)) {
            let value = input[key];
            copy[key] = clone(value);
        }
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
let res = clone(original);
console.log(res);
