#!/usr/bin/env node	

const timer = (counter, delay) => {
    console.log(`✅ Starting countdown: ${counter} steps every ${delay / 1000}s\n`);
    setInterval(() => {
        console.log(`⏳ ${counter--}`);
        if (counter == 0 ) {
           process.exit(0);
        }
    }, delay);
}

// node CountDonwTimer.js <count> <delay-in-sec>
args = process.argv.slice(2);

if (args.length < 2) {
    console.log('Insufficient Arguments.');
    console.log('node CountDownTimer.js <count> <delay-in-sec>');
    process.exit(1);
} 

let counter = parseInt(args[0]);
let delay = parseFloat(args[1] * 1000);

if (isNaN(counter) || isNaN(delay) || counter < 1 || delay < 1) {
    console.log('Counter and Delay must be a positive number!')
    process.exit(2);
}

timer(counter, delay);


