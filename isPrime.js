// Function to check if a number is prime
function isPrime(input) {
    // Assume the number is prime by default
    let isPrimeFlag = true;

    // Loop through numbers from 2 up to input - 2
    // (this should ideally be input - 1 or even better: i <= Math.sqrt(input))
    for (let i = 2; i < input - 1; i++) {
        // If input is divisible by i, it's not a prime
        if (!(input % i)) {  // Equivalent to (input % i === 0)
            isPrimeFlag = false;
            break; // No need to check further, break out of the loop
        }
    }

    return isPrimeFlag;
}

// Loop from 0 to 49 and check if each number is prime
for (let i = 0; i < 50; i++)
    console.log(`${i} is ${isPrime(i) ? "prime" : "not a prime"} number!`);
