const reverseString = (string) => {
    let reversed = "";
    const length = string.length;
    let j = 0;

    for (let i = length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

console.log(reverseString("Welcome"));
