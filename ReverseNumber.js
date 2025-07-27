function reverseNumber(x) {
    let reversed = 0;

    while (x !== 0) {
        reversed = reversed * 10 + (x % 10);
        let t = x / 10;
        x = t - (t % 1);
    }

    return reversed;
}

let input = 12345;
console.log(`Reversed number of ${input} is ${reverseNumber(input)}`);

input = -12345;
console.log(`Reversed number of ${input} is ${reverseNumber(input)}`);
