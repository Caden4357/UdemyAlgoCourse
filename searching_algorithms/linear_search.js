// ! Time Complexity: O(n)
// ! Space Complexity: O(1)
function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1
}
console.log(linearSearch([1,2,3,4,5], 2)); // 1
console.log(linearSearch([1,2,3,4,5], 3)); // 2
console.log(linearSearch([1,2,3,4,5], 5)); // 4
console.log(linearSearch([1,2,3,4,5], 6)); // -1