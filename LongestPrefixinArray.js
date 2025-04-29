function longestPrefix(inArr) {
    let prefix = inArr[0];

    for(let i = 0; i < inArr.length; i++) {
        while(!inArr[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') 
                return "";
        }
    }

    return prefix;
}

inArr = ["fl", "flight","fly","flown"];
console.log('longestPrefix: ' + longestPrefix(inArr));
