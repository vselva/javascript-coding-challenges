/*
58. Length of Last Word
=======================
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function (s) {
    const splitted = s.split(" ");
    for (let i = splitted.length - 1; i >= 0; i--) {
        if (splitted[i] !== "") {
            return splitted[i].length;
        }
    }
};

let s = "Hello World";
console.log(lengthOfLastWord(s));
s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
s = "luffy is still joyboy";
console.log(lengthOfLastWord(s));
