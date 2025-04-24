function findSecondSmallestInArray(inArr) {
    if (inArr.length < 2)
        return 'Invalid Array!';

    let smallest = Infinity;
    let secondSmallest = Infinity;
    let i = 0;

    while (i in inArr) {
        let item = inArr[i];
        if (typeof item !== 'number' || isNaN(item)) {
            i++;
            continue; // skip non-numeric or NaN values
        }

        if (item < smallest) {
            secondSmallest = smallest;
            smallest = item;
        } else if (item < secondSmallest && item !== smallest) {
            secondSmallest = item;
        }
        i++;
    }

    return secondSmallest === Infinity ? 
        'There is no second smallest number in the array' : secondSmallest;
}

// ✅ Test cases with comments:

let inArr = [3, 5, 6, 1, 2, 4, 7, 8, 9, 10, 11];
console.log('Second Smallest:', findSecondSmallestInArray(inArr)); 
// Expected: 2 (1 is the smallest, 2 is the next smallest)

inArr = [-1, -2, -3, -5];
console.log('Second Smallest:', findSecondSmallestInArray(inArr)); 
// Expected: -3 (-5 is the smallest, -3 is the second smallest)

inArr = [5, 5, 5];
console.log('Second Smallest:', findSecondSmallestInArray(inArr)); 
// Expected: There is no second smallest number in the array (all elements are equal)

inArr = [7];
console.log('Second Smallest:', findSecondSmallestInArray(inArr)); 
// Expected: Invalid Array! (only one element)

inArr = [9, 2, 9, 3, 9];
console.log('Second Smallest:', findSecondSmallestInArray(inArr)); 
// Expected: 3 (2 is the smallest, 3 is the second smallest, repeated 9s are ignored)
