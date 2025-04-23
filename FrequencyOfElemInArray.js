// Function to find frequency of each element in an array without using built-in methods
function findFrequencyOfEachElementOfArray(inArr) {
    // Validate input: must be a non-empty array
    if (!Array.isArray(inArr) || inArr.length < 1)
        return { 'error': 'not valid array' };

    let countObj = {}; // Object to track unique elements and their counts
    let i = 0;         // Manual index tracking since no built-in methods should be used

    // Iterate using `i in inArr` to safely traverse array indices
    while (i in inArr) {
        let item = inArr[i];

        // Create a unique key combining type and value to distinguish '1' vs 1, etc.
        let key = typeof item + ':' + item;

        // Count logic: increment if exists, initialize if not
        if (countObj[key]) {
            countObj[key].count++;
        } else {
            countObj[key] = {
                value: item,
                type: typeof item,
                count: 1
            };
        }

        i++; // Move to next index
    }

    // Prepare a cleaner final result for output
    let result = {};
    for (let k in countObj) {
        let entry = countObj[k];
        // Final key includes type and actual value
        result[`(${entry.type}) ${entry.value}`] = entry.count;
    }

    return result; // Return frequency of all elements with types preserved
}


let inArr = [1, '1', 2, 2, 3, 3, 3, 4, 4, 4, null, undefined, 4, 5, 5, 5, 5, 5];

console.log(`Array: [ ${inArr} ] => `);
console.log(findFrequencyOfEachElementOfArray(inArr));