/*
2723: Add Two Promises
*/

const addTwoPromises = async (promise1, promise2) => {
    const [val1, val2] = await Promise.all([promise1, promise2]);
    return val1 + val2;
};

const promise1 = new Promise((res, rej) => setTimeout(() => res(10), 5));
const promise2 = new Promise((res, rej) => setTimeout(() => res(10), 2));

const res = addTwoPromises(promise1, promise2).then(console.log);
