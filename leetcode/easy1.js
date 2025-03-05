// Longest common prefix 
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// if char at 0 index matches char at every other index start window continuing to check if chars match 

function longestPrefix(strs) {
}
longestPrefix(["flower", "flow", "flight"])


// find the index of the first occurance in a string 
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function firstOccurance(haystack, needle) {
    if(needle.length > haystack.length){
        return -1
    }
    let foundIdx = -1
    let needleIdx = 0
    for (let idx = 0; idx < haystack.length; idx++) {
        if (haystack[idx] === needle[needleIdx]) {
            if(needleIdx === 0){
                foundIdx = idx;
            }
            needleIdx++
        }
        else if (haystack[idx] !== needle[needleIdx]) {
            needleIdx = 0
            foundIdx = -1
        }
    }
    return foundIdx
};

console.log(firstOccurance('mississippi', 'issip'));