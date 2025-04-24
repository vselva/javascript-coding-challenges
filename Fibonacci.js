function fibonacci(input) {
    if (input <= 0) 
        return 'Invalid Input'; // Handle invalid input

    if (input === 1) 
        return [0]; // Special case for input 1 (just the first element)

    let previous = 0; // The first number in Fibonacci
    let current = 1;  // The second number in Fibonacci
    let fibonacci = [0, 1]; // Initialize array with first two numbers

    for (let i = 2; i < input; i++) { // Start from index 2 as first two numbers are already added
        fibonacci[i] = previous + current; // Directly assign the next Fibonacci number to the array
        previous = current; // Move the previous pointer
        current = fibonacci[i]; // Move the current pointer
    }

    return fibonacci; // Return the complete Fibonacci series up to input number
}

console.log(`Fibonacci Series: [${fibonacci(0)}]`); // Invalid input case
console.log(`Fibonacci Series: [${fibonacci(1)}]`); // Fibonacci for input 1
console.log(`Fibonacci Series: [${fibonacci(2)}]`); // Fibonacci for input 2
console.log(`Fibonacci Series: [${fibonacci(10)}]`); // Fibonacci for input 10
