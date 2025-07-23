/*
2621. Sleep
===========
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.
*/

function sleep(millis) {
    return new Promise((res, rej) => {
        setTimeout(() => res(10), millis);
    });
}

let t = Date.now();
sleep(1000).then(() =>
    console.log("Sleeping For " + (Date.now() - t) + " Milli Seconds")
);
