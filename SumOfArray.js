function sumOfArray(inArr) {
    if (!Array.isArray(inArr)) {
        return '- Invalid input: Please provide an array';
    }

    let sum = 0;
    let i = 0;

    while (inArr[i] !== undefined) {
        sum = sum + inArr[i];
        i++;
    }

    return sum;
}

function recursiveSumOfArray(array) {
    if (array.length < 2) {
        return array[0];
    } else {
        return array[array.length - 1] + recursiveSumOfArray(array.slice(0, -1));
    }
    return 1;
}

let inArr = [6, 9, 8, 0, 8, -1];
console.log(`Sum of Array [ ${inArr} ] is ${sumOfArray(inArr)}`);
console.log(`Sum of Array [ ${inArr} ] is ${recursiveSumOfArray(inArr)}`);

inArr = [];
console.log(`Sum of Array [ ${inArr} ] is ${recursiveSumOfArray(inArr)}`);
//console.log(`Sum of Array [ ${inArr} ] is ${recursiveSumOfArray(inArr)}`);

inArr = 9;
console.log(`Sum of Array [ ${inArr} ] is ${recursiveSumOfArray(inArr)}`);
//console.log(`Sum of Array [ ${inArr} ] is ${recursiveSumOfArray(inArr)}`);
