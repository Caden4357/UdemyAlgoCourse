// write a function call areThereDuplicates that takes in a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern.
// ! hint use the spread operator to convert the arguments into an array
const areThereDuplicates = (...args) => {
    const frequencyCounter = {};
    for (let num of args) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true
        }
    }
    return false
}
console.log(areThereDuplicates(1, 2, 3, 4, 5, 6, 2)); // true
console.log(areThereDuplicates('1', 'w', 'a', 'w')); // true
console.log(areThereDuplicates('1', 'w', 'a', '2')); // false

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
const averagePair = (arr, target) => {
    if (arr.length === 0) return false
    let left = 0;
    let right = arr.length - 1
    while (right > 1) {
        let avg = (arr[left] + arr[right]) / 2
        if (avg === target) return true;
        else if (avg < target) left++;
        else right--
    }
    return false
}
console.log(averagePair([1, 2, 3], 2.5)); // true 
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([])); // false

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {
    let i = 0;
    let j = 0;
    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
        }
        if (i === str1.length) {
            return true;
        }
        j++
    }
    return false
}
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) return null;
    let max = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    tempSum = max;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        max = Math.max(max, tempSum);
    }
    return max;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// 1. Initialize Variables
// Create two pointers or indices, start and end, initially set to the start of the array. These will define the current subarray being considered.
// Initialize a variable to track the current sum of the subarray, e.g., currentSum = 0.
// Initialize a variable to track the minimum length of the subarray that meets the condition, e.g., minLength = Infinity (or a large number to represent infinity). This variable will be updated as we find suitable subarrays.
// Initialize a variable to track the array's length, for convenience.
// 2. Expand the Window
// Using a while loop, expand the end of the window to the right by incrementing end until the currentSum is greater than or equal to the target integer or until end reaches the array's end.
// As you move end to the right, add the value of the current element pointed by end to currentSum.
// 3. Shrink the Window
// Once the currentSum is greater than or equal to the target, you have a potential candidate for the minimal length subarray.
// Update minLength if the length of the current subarray (end - start + 1) is smaller than the current minLength.
// To find the smallest such subarray, start shrinking the window from the left by incrementing start and subtracting the value of the element at start from currentSum until currentSum is less than the target integer.

const minSubArrayLen = (arr, targetSum) => {
    let start = 0;
    let end = 0;
    let currentSum = 0;
    let minLength = Infinity;
    let arrLength = arr.length;
    while (end < arrLength) {
        currentSum += arr[end];
        while (currentSum >= targetSum) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= arr[start];
            start++
        }
        end++
    }
    return minLength === Infinity ? 0 : minLength;
}
console.log(minSubArrayLen([1, 2, 3, 4, 5, 6, 7, 8], 9));


// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
// Examples:
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8

//  L
// 'longestsubstring'
//   R
// 1.) initialize vars for left and right (using sliding window method) another var for length of substring
// 2.) left = 0 right = 1 if str[left] !== str[right] increase right 
// 3.) use an object as a frequency counter to see if all values are unique 
// const findLongestSubstring = (str) => {
//     let left = 0;
//     let right = 1;
//     let substringLength = 0;
//     if (str.length === 0) {
//         return 0;
//     }
//     let map = {}
//     while (right < str.length) {
//         let char = str[right]
//         if(map[char]){
//             right = Math.max(right, map[char])
//         }
//         substringLength = Math.max(longest, left - )
//     }
//     return substringLength
// }
// console.log(findLongestSubstring('longestsubstring')); // 8
// console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// console.log(findLongestSubstring('thecatinthehat')) // 7
// console.log(findLongestSubstring('bbbbbb')) // 1
// console.log(findLongestSubstring('longestsubstring')) // 8

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}
console.log(findLongestSubstring('thisisawesome')) // 6
