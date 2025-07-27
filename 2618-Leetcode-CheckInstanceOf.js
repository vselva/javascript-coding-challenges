var checkIfInstanceOf = function (obj, classFunction) {
    return obj instanceof classFunction;
};

class Animal {
    walk() {
        console.log("walk");
    }
}
class Dog extends Animal {
    bark() {
        console.log("bark");
    }
}
const dog = new Dog();
console.log(checkIfInstanceOf(dog, Dog));
console.log(checkIfInstanceOf(dog, Animal));

console.log("");
console.log(typeof 5); // 'number'
console.log(checkIfInstanceOf(5, Number));
