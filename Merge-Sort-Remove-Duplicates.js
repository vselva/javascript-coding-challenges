function sortRemoveDuplicates(...arrays) {
    let merged = [];
    let j = 0;

    // merging
    for (let i = 0; i < arrays.length; i++) {
        let arr = arrays[i];
        for (value of arr) {
            merged[j++] = value;
        }
    }

    // sorting
    for (let i = 0; i < merged.length; i++) {
        for (let k = i; k < merged.length; k++) {
            if (merged[i] > merged[k]) {
                let temp = merged[i];
                merged[i] = merged[k];
                merged[k] = temp;
            }
        }
    }
    console.log(merged);

    // removing duplicates
    let c = 0;
    let d = 0;
    let cleaned = [];
    let duplicates = [];
    for (let i = 0; i < merged.length; i++) {
        if (merged[i] !== merged[i + 1]) {
            cleaned[c++] = merged[i];
        } else {
            duplicates[d++] = merged[i];
        }
    }

    return { cleaned, duplicates };
}

const inArr1 = [0, 3, 4, -2];
const inArr2 = [3, 9, -8, 2, -9];
const inArr3 = [8, 3, -8, -5, 0];

const { cleaned, duplicates } = sortRemoveDuplicates(inArr1, inArr2, inArr2);
console.log(cleaned);
console.log(duplicates);
