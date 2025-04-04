// Approach 1: Using switch-case to count vowels and non-vowels
function countVowelsWithSwitch(inStr) {
    let countVowels = 0;
    let countNonVowels = 0;

    for (let i = 0; i < inStr.length; i++) {
        // Convert to lowercase for case-insensitive matching
        switch (inStr[i].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                countVowels++;
                break;
            default:
                countNonVowels++;
                break;
        }
    }

    return [countVowels, countNonVowels];
}

// Approach 2: Using an array and includes()
function countVowelsWithArray(inStr) {
    let countVowels = 0;
    let countNonVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of inStr.toLowerCase()) {
        if (vowels.includes(char)) {
            countVowels++;
        } else {
            countNonVowels++;
        }
    }

    return [countVowels, countNonVowels];
}

// Approach 3: Using Set and has()
function countVowelsWithSet(inStr) {
    let countVowels = 0;
    let countNonVowels = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let char of inStr.toLowerCase()) {
        if (vowels.has(char)) {
            countVowels++;
        } else {
            countNonVowels++;
        }
    }

    return [countVowels, countNonVowels];
}

// Utility function to print results in a clean format
function testVowelCounter(label, fn, input) {
    const [vowels, nonVowels] = fn(input);
    console.log(`\n${label}`);
    console.log(`Vowels Count: ${vowels}`);
    console.log(`Non-Vowels Count: ${nonVowels}`);
}

// Input
const inStr = 'AEiou123SSxyz';

// Run all three versions
testVowelCounter('Using switch-case:', countVowelsWithSwitch, inStr);
testVowelCounter('Using array & includes():', countVowelsWithArray, inStr);
testVowelCounter('Using Set & has():', countVowelsWithSet, inStr);
