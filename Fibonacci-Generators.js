function* fibGen(max = 1000) {
    let a = 0;
    yield a;
    let b = 1;
    yield b;

    while (1) {
        let c = a + b;
        yield c;
        a = b;
        b = c;
        if (c > max) {
            break;
        }
    }
}

let fibGenerated = fibGen();
for (i = 0; i < 10; i++) {
    console.log(`${i + 1}: ${fibGenerated.next().value}`);
}
