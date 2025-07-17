const revString = (string) => {
    let reversed = "";

    for (char of string) {
        reversed = char + reversed;
    }
    return reversed;
};

console.log(revString("Welcome!"));
