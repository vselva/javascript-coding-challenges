// Helper function to count characters in a string
function createCounterObject(inStr) {
    let counterObject = {};

    for (i = 0; i < inStr.length; i++) {
        if(counterObject[inStr[i]]) {
            counterObject[inStr[i]]++
        } else {
            counterObject[inStr[i]] = 1;
        }
    }
    return counterObject;
}

// Main function to check if two strings are anagrams
function isAnagram(inStr1, inStr2) {
    if (inStr1.length !== inStr2.length) return false;

    let counterObject1 = createCounterObject(inStr1);
    let counterObject2 = createCounterObject(inStr2);
    // Compare character counts
    for (key in counterObject1) {
        if(counterObject1[key] != counterObject2[key]) {
            return false;
        }
    }
    return true;
}

// Test cases
const inStr1 = 'race';
const inStr2 = 'care';
let isAnagram1 = isAnagram(inStr1, inStr2);
console.log(`${inStr1} and ${inStr2} are${!isAnagram1 ? ' not ': ' '}anagram!`);

const inStr3 = 'race';
const inStr4 = 'cars';
let isAnagram2 = isAnagram(inStr3, inStr4);
console.log(`${inStr3} and ${inStr4} are${!isAnagram2 ? ' not ' : ' '}anagram!`);
