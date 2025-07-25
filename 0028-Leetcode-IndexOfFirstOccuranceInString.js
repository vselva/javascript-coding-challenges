/*
28. Find the Index of the First Occurrence in a String
======================================================
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack
*/

function strstr(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let found = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] != needle[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
}

const haystack = "sssssadbutsad";
const needle = "sad";
console.log(strstr(haystack, needle));
