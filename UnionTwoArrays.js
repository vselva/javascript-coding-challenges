// Function to find the union of two arrays without using built-in functions
unionOfTwoArrays = (inArr1, inArr2) => {
    let outArr = []; // Array to store the union of the arrays
    let index = 0;

    // Add elements from the first array
    let i = 0;
    while (i < inArr1.length) {
        outArr[index++] = inArr1[i]; // Add element from inArr1
        i++;
    }

    // Add elements from the second array
    i = 0;
    while (i < inArr2.length) {
        outArr[index++] = inArr2[i]; // Add element from inArr2
        i++;
    }

    return outArr;
}

// Input arrays
let inArr1 = [1, 2, 3, 4, 5];
let inArr2 = [6, 7, 8, 9, 10];

// Display the union of the arrays
console.log(`Union of two arrays: ${unionOfTwoArrays(inArr1, inArr2)}`);
