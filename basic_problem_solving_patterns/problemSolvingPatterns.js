const frequencyCounter = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false
    }
    const frequency = {}
    const frequency2 = {}

    for(let num of arr1){
        frequency[num] = (frequency[num] || 0) + 1
    }
    for(let num of arr2){
        frequency2[num] = (frequency2[num] || 0) + 1
    }
    console.log(frequency, frequency2);
}
console.log(frequencyCounter([1,2,3,4,5], [1,2,3,5,4]));

// Anagram 
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false
    }
    const frequencyOfString1 = {}

    for (let char of str1){
        frequencyOfString1[char] = (frequencyOfString1[char] || 0) + 1
    }
    for (let char of str2){
        if(!frequencyOfString1[char]){
            return false
        }
        frequencyOfString1[char] -= 1
    }
    return true
} 
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true


// Multiple pointers 
// Only works on a sorted list in this situation
const multiplePointers = (arr) => {
    let left = 0;
    let right = arr.length-1
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        }
        else if(sum > 0){
            right--
        }
        else{
            left--
        }
    }
}
console.log(multiplePointers([-3,2,3,2,12,9,-3,3,30.900]));

// count unique values
const countUniqueValues = (arr) => {
    if(arr.length === 0){
        return 0
    }
    let left = 0
    let right = 1
    let uniqueVals = 1
    while(right < arr.length){
        if(arr[right] !== arr[left]){
            uniqueVals++
        }
        right++
        left++
    }
    return uniqueVals
}
console.log(countUniqueValues([1,1,1,1,1,2])); // 2 
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7 
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4

// This is the udemy solution he uses 2 pointers but only increases the left when a unique value is found then returns the i+1 because thats the length of the uniquevalues subarray inside the arr 

const countUniqueVals = (arr) => {
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    i++;
    return i;
}
console.log(countUniqueVals([1,1,1,1,1,2])); // 2 
console.log(countUniqueVals([1,2,3,4,4,4,7,7,12,12,13])); // 7 
console.log(countUniqueVals([])); //0
console.log(countUniqueVals([-2,-1,-1,0,1])); // 4

// ** Sliding window pattern ** 

// this is useful when we have a set of data like an array or a string and we're looking for a subset of that data that is continuous in some way. Ex.
// write a function to find the longest sequence of unique characters,
// input hellothere 
//           other is the longest sequence of unique characters 

