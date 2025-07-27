const flattenArray = (input) => {
    if (typeof input !== "object") {
        return input;
    }

    let copy = [];
    for (key in input) {
        let value = input[key];
        let flatten = flattenArray(value);
        copy = copy.concat(flatten);
    }

    return copy;
};

const input = [1, 2, 3, 4, [5, 6, [7, 8]], 9, 10];
const output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(flattenArray(input));
