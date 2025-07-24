/*
2622. Cache With Time Limit
===========================
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/

class TimeLimitedCache {
    cache = new Map();

    set(key, value, duration) {
        const alreadyExists = this.cache.get(key);
        if (alreadyExists) {
            clearTimeout(alreadyExists.setTimeoutId);
        }
        const setTimeoutId = setTimeout(() => this.cache.delete(key), duration);
        this.cache.set(key, { value, setTimeoutId });
        return Boolean(alreadyExists);
    }

    get(key) {
        if (this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }

    count() {
        return this.cache.size;
    }
}

const timeLimitedCache = new TimeLimitedCache();
const set = timeLimitedCache.set(1, 42, 1000); // false
const get = timeLimitedCache.get(1); // 42
const count = timeLimitedCache.count(); // 1

console.log(set);
console.log(get);
console.log(count);
