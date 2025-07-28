const freq = (str) => {
    let strMap = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        strMap[char] = strMap[char] ? ++strMap[char] : 1;
    }

    let entries = Object.entries(strMap);
    for (let i = 0; i < entries.length; i++) {
        for (let j = i + 1; j < entries.length; j++) {
            if (entries[i][1] > entries[j][1]) {
                let temp = entries[i];
                entries[i] = entries[j];
                entries[j] = temp;
            }
        }
    }

    let output = "";
    for ([key, value] of entries) {
        output += `${key} : ${value}, `;
    }

    return output.slice(0, -2);
};

const instr = "abbeeec";
console.log(freq(instr));
