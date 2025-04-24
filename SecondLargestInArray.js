function findSecondLargestNumberInArray(inArr) {
    if(!Array.isArray(inArr) || inArr.length < 2)
        return 'Invalid Array';

    let secondLargest = -Infinity;
    let largest = -Infinity

    // Iterate over the remaining elements of the array
    let i = 0;
    while (i < inArr.length) {
        const current = inArr[i];
        if(current > largest){
            secondLargest = largest;
            largest = current;
        } else if (current < largest && current > secondLargest) {
            secondLargest = current;
        }
        i++;
    }
    
    // If the largest and secondLargest are the same, 
    // return 'No Second Largest'
    return secondLargest === -Infinity ? 'No Second Largest' : secondLargest;
}

// Test cases
let inArr = [3, 5, 6, 1, 2, 4, 7, 8, 9, 10, 11];
console.log('Second Largest:', findSecondLargestNumberInArray(inArr)); // 10

inArr = [-1, -2, -3, -5];
console.log('Second Largest:', findSecondLargestNumberInArray(inArr)); // -2

inArr = [5, 5, 5];
console.log('Second Largest:', findSecondLargestNumberInArray(inArr)); // No Second Largest

inArr = [7];
console.log('Second Largest:', findSecondLargestNumberInArray(inArr)); // Invalid Array

inArr = [9, 2, 9, 3, 9];
console.log('Second Largest:', findSecondLargestNumberInArray(inArr)); // 3
