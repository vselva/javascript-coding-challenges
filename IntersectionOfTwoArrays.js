// Function to find the intersection of two arrays without using built-in functions
findIntersectionOfTwoArrays = (inArr1, inArr2) => {
    let intersection = []; // Array to store common elements
    let index = 0; // Index for inserting into the intersection array

    // Loop through first array
    let i = 0;
    while (i < inArr1.length) {
        // Loop through second array
        let j = 0;
        while (j < inArr2.length) {
            // If a common element is found,
            // add it to intersection array.
            if (inArr1[i] == inArr2[j]) {
                if(!intersection.includes(inArr1[i])) {
                    intersection[index++] = inArr1[i];
                    break; // Optional: avoids duplicate entries if duplicates are not allowed
                }
            }
            j++;
        }

        i++;
    }

    return intersection;
};

// Input arrays
let inArr1 = [4, 1, 2, 3, 8, 3, 4, 5];
let inArr2 = [4, 5, 6, 7, 8, 3];

// Display the intersection of the arrays
console.log(`Intersection of those arrays are: ${findIntersectionOfTwoArrays(inArr1, inArr2)}`);
