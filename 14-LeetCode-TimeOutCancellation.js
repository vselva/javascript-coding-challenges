/*
Timeout Cancellation:
=====================
Overview:
We need to implement a function cancellable that executes a given function (let's call it fn) after a specified delay (t milliseconds), unless a cancel function (cancelFn) is called before the delay expires. The cancel function should prevent the execution of the delayed function.

In other words, we have a task fn we want to do, but we want to wait for a bit (t milliseconds) before doing it. However, if we change our mind and want to cancel this task before the wait time is up, we can use a cancel function (cancelFn). If we don't cancel, the task will happen after the delay.
*/

function cancellable(fn, args, t) {
    const timer = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timer);
}

const c = cancellable(() => console.log("cancellable!"), [], 1000);
setTimeout(() => c(), 500);
