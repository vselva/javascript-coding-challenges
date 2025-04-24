// Function to count occurrences of a character in a string without using .length
function findCountOfCharInString(inStr, inChar) {
    let countOfChar = 0;

    // Loop through the string using for...in to avoid using .length
    for (let i in inStr) {
        if (inStr[i] === inChar) {
            countOfChar++;
        }
    }

    return countOfChar;
}

let inStr = '122333444455555666666';
let printedChar = {}; // To track already processed characters

// Loop through string without using .length
for (let i in inStr) {
    let char = inStr[i];

    // If character not yet counted, process it
    if (!printedChar[char]) {
        let count = findCountOfCharInString(inStr, char);
        console.log(`The occurrence of '${char}' in "${inStr}" is ${count}`);
        printedChar[char] = count; // Mark character as processed
    }
}
console.log('-------------------------------------------------------');
console.log(printedChar);