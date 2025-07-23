/*
2703. Return Length of Arguments Passed:
========================================
Write a function argumentsLength that returns the count of arguments passed to it.
*/

function countOfArguments(...args) {
    return args.length;
}

const count = countOfArguments(1, 2, 3, 4, 5);
console.log(count);
