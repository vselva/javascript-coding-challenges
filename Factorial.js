function factorial(input) {
    if (input < 0) 
        return ['Invalid Input', 0];

    let factorial = 1;
    let parts = '1';

    for (let i = 2; i <= input; i++) {
        factorial *= i;
        parts += ' x ' + i;
    }

    return [parts, factorial];
}

for (let input = 0; input < 10; input++) {
    const [fs, f] = factorial(input);
    console.log(`The factorial for ${input} is ${fs} = ${f}`);
}

// Recursive Method
const recursiveFactorial = (num) => {
    if (num < 2) {
        return 1;
    } else {
        return num * recursiveFactorial(num - 1);
    }
}
console.log(recursiveFactorial(5));
