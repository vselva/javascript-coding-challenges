
function recursiveSum(arr) {
    if (arr.length === 1)
        return arr[0];
    else 
        return arr[0] + recursiveSum(arr.slice(1)); // exclude first element and send rest 
}

const sum = recursiveSum([1, 2, 3]);
console.log(sum);
