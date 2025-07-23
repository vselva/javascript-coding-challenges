/*
2637. Promise Time Limit:
=========================
Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, 
the time limited function should resolve with the result.

If the execution of the fn exceeds the time limit, 
the time limited function should reject with the string "Time Limit Exceeded".
*/

var timeOut = (fn, t) => {
    return async function (...args) {
        return new Promise(async (res, rej) => {
            const id = setTimeout(() => rej("Time Limit Exceeded"), t);
            try {
                ret = await fn(...args);
                res(ret);
            } catch (err) {
                rej(err);
            } finally {
                clearTimeout(id);
            }
        });
    };
};

const fn = async (n) => {
    await new Promise((res, rej) => setTimeout(res, n));
    return "Done!";
};

const t1 = timeOut(fn, 1000);
t1(500).then(console.log).catch(console.log);

const t2 = timeOut(fn, 1000);
t2(2000).then(console.log).catch(console.log);
