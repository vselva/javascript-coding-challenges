/*
2722. Join Two Arrays by ID
===========================
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

If a key only exists in one object, that single key-value pair should be included in the object.
If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
*/

const mergeObj = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

var join = function (arr1, arr2) {
    const map = {};

    for (const obj of arr1) {
        map[obj.id] = { ...obj };
    }
    console.log(map);
    console.log(arr1);

    for (const obj of arr2) {
        if (map[obj.id]) {
            map[obj.id] = { ...map[obj.id], ...obj };
        } else {
            map[obj.id] = { ...obj };
        }
    }
    console.log(map);

    return Object.values(map).sort((a, b) => a.id - b.id);
};

let arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 2 },
];
let arr2 = [
    { id: 2, x: 20 },
    { id: 3, x: 3 },
];
console.log(join(arr1, arr2));
