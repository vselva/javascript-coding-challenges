console.log('Rotate Array using build-in functions:');
function rotateArray(inArr, count) {
    let rotatedArray = [];
    for(let i = 0; i < count; i++) {
        rotateArray = [inArr.pop(), ...inArr];
        inArr = rotateArray;
        console.log('roated:', rotateArray);
    }

    return rotateArray;
}
const inArr = [1, 2, 3, 4, 5];
console.log(`Rotating an Array [ ${inArr} ] = ${rotateArray(inArr, 2)}`);

console.log('');
