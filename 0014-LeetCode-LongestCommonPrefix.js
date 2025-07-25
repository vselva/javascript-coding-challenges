/*
14. Longest Common Prefix
=========================
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1); // reduce prfix by 1 char at the end
            if (prefix === "") return "";
        }
    }
    return prefix;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
