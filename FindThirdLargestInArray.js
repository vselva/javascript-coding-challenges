function findThirdLargestInArray(inArr) {
    let sorted = inArr.sort((a, b) => b - a);
    let descSorted = Array.from(new Set(sorted));
    const [, ,thirdLargest] = descSorted;
    console.log('Third Largest: ' + thirdLargest);
}

function findThirdSmallestInArray(inArr) {
    let uniqueArr = Array.from(new Set(inArr));
    let ascSorted = uniqueArr.sort((a, b) => a - b);
    let [, ,thirdSmallest] = ascSorted;
    console.log('Third Smallest: ' + thirdSmallest);
}

let inArr = [4, 5, 6, 7, 8, 1, 2, 2, 3, 9, 10];
findThirdLargestInArray(inArr);
findThirdSmallestInArray(inArr);
