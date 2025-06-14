console.log('Rotate Array using build-in functions:');
function rotateArrayWithBuildInFunction(inArr, count) {
    let rotated = [];
    for(let i = 0; i < count; i++) {
        rotated = [inArr.pop(), ...inArr];
        inArr = rotated;
        console.log('roated:', rotated);
    }

    return rotated;
}
let inArr = [1, 2, 3, 4, 5];
console.log(`Rotating an Array [ ${inArr} ] = ${rotateArrayWithBuildInFunction(inArr, 2)}`);

console.log('');
console.log('rotateArray without buildin functions');
const rotateArray = (inArr, count) => {
    let rotated = [];
    for(let c = 0; c < count; c++) {
        rotated = [];
        rotated[0] = inArr[inArr.length-1];
        for(let i = 1; i < inArr.length; i++) {
            rotated[i] = inArr[i - 1];
        }
        inArr = rotated;
    }
    return rotated;
}
inArr = [1, 2, 3, 4, 5];
console.log('Rotated Array:', rotateArray(inArr, 2));