// ! Only works on sorted arrays 
// My solution
function binarySearchNums(arr, val){
    let left = 0;
    let right = arr.length-1
    while(left<=right){
        let middleIdx = Math.floor((left+right)/2)
        let middle = arr[middleIdx]
        if(middle === val){
            return middleIdx
        }
        if(middle < val){
            left = middleIdx+1
        }
        else{
            right = middleIdx-1
        }
    }
    return -1
}
console.log(binarySearchNums([1,3,4,6,8,9,11,12,15,16,17,18,19], 15)); // 8



// From the video 
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

// Time Complexity: O(log n) - Binary Search
// Space Complexity: O(1) - Binary Search
// Best Case: O(1) - Constant Time
// Average Case: O(log n) - Logarithmic Time
// Worst Case: O(log n) - Logarithmic Time
