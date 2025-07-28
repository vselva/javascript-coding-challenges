const iterate = (obj) => {
    console.log("---for in---");
    for (let key in obj) if (obj.hasOwnProperty) console.log(obj[key]);

    // console.log('-----------------');
    // console.log('---object.keys---')
    // for(key of Object.keys(obj)) console.log(obj[key]);

    // console.log('-----------------');
    // console.log('---object.values---')
    // for(value of Object.values(obj)) console.log(value);

    // console.log('--------------------');
    // console.log('---object.entries---')
    // for([key, value] of Object.entries(obj)) console.log(key, ':', value)
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

iterate(original);
