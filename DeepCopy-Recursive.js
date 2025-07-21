const deepCopy = (input) => {
    if (typeof input !== "object") {
        return input;
    }

    let copy = Array.isArray(input) ? [] : {};

    for (key in input) {
        const value = input[key];
        copy[key] = deepCopy(value);
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

const copy = deepCopy(original);
console.log(copy);
