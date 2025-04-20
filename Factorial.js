// Function to calculate the factorial of a given number
function factorial(input) {
    // If the input is a negative number, factorial is not defined
    if (input < 0) 
        return ['Invalid Input', 0];

    // Initialize factorial result to 1 (since factorial of 0 and 1 is 1)
    let factorial = 1;

    // Initialize the string that will store the multiplication sequence (like "1 x 2 x 3")
    let parts = '1';

    // Loop from 2 up to the input value, multiplying the factorial and building the string
    for (let i = 2; i <= input; i++) {
        factorial *= i;               // Multiply current number to factorial
        parts += ' x ' + i;           // Append current number to the parts string
    }

    // Return both the multiplication sequence string and the final factorial result as an array
    return [parts, factorial];
}

// Loop to test factorial calculation from 0 to 9
for (let input = 0; input < 10; input++) {
    // Destructure the array returned by the factorial function into fs (string) and f (result)
    const [fs, f] = factorial(input);

    // Print the result in a clear and formatted way
    console.log(`The factorial for ${input} is ${fs} = ${f}`);
}
