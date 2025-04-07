// Function to check if `needle` exists in `haystack` (similar to strstr function)
function strstr(haystack, needle) {
    // If the needle is an empty string, return false (we're not handling empty search string)
    if (needle.length === 0) return false;

    let needleLenght = needle.length;
    let strLength = haystack.length;

    // Loop through each character of `haystack` where `needle` can possibly start
    for (let i = 0; i <= strLength - needleLenght; i++) {

        // Inner loop checks if the characters match for the current position
        for (let j = 0; j < needleLenght; j++) {

            // If characters at current position don't match, break out of inner loop
            if (needle[j] !== haystack[i + j]) {
                break;
            }

            // If all characters in `needle` matched, return true
            if (j == needle.length - 1)
                return true;
        }
    }

    // If loop completes and no match found, return false
    return false;
}

// Test Case 1: Should return true because 'Java' is present in the string
let haystack1 = 'Welcome to JavaScript';
let needle1 = 'Java';
console.log(`The needle '${needle1}'${strstr(haystack1, needle1) ? ' ' : ' not '}exists in String '${haystack1}'.`);

// Test Case 2: Should return false because 'java' (lowercase) is not the same as 'Java' (uppercase)
let haystack2 = 'Welcome to JavaScript';
let needle2 = 'java';
console.log(`The needle '${needle2}'${strstr(haystack2, needle2) ? ' ' : ' not '}exists in String '${haystack2}'.`);
