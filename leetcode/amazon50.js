
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/?envType=problem-list-v2&envId=7p5x763&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJGUkVRVUVOQ1kifV0%3D&page=1

var minimumOperations = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]] && nums[i] > 0) {
            map[nums[i]] = 1;
        }
    }
    return Object.keys(map).length;
};
// console.log(minimumOperations([1,5,0,3,5]));



// [[1,3],[2,2],[3,1]],
// # of boxes, # of units per box
// Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
// Output: 8
// Explanation: There are:
// - 1 box of the first type that contains 3 units.
// - 2 boxes of the second type that contain 2 units each.
// - 3 boxes of the third type that contain 1 unit each.
// You can take all the boxes of the first and second types, and one box of the third type.
// The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
var maximumUnits = function (boxTypes, truckSize) {
    // we have sorted array and truck size 
    let maxUnits = 0;
    const sorted = boxTypes.sort(function (a, b) {
        return b[1] - a[1]
    })
    for (let i = 0; i < sorted.length; i++) {
        let numOfBoxes = sorted[i][0];
        const unitsPerBox = sorted[i][1];
        if (numOfBoxes <= truckSize) {
            truckSize -= numOfBoxes;
            maxUnits += (numOfBoxes * unitsPerBox);
        }
        else if (numOfBoxes > truckSize) {
            var count = 0;
            while (truckSize > 0 && numOfBoxes > 0) {
                truckSize -= 1;
                numOfBoxes -= 1;
                count++;
            }
            maxUnits += (count * unitsPerBox);
        }
        if (truckSize === 0) {
            return maxUnits;
        }
    }
    return maxUnits;
};
console.log(maximumUnits([[1,3],[2,2],[3,1]], 4));

// https://leetcode.com/problems/find-triangular-sum-of-an-array/description/?envType=problem-list-v2&envId=7p5x763&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJGUkVRVUVOQ1kifV0%3D&page=1

// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the triangular sum of nums.
var triangularSum = function(nums) {
    // keep track of the length of the array and do a while loop until it reaches 1 
    let len = nums.length;
    while(len > 1){
        let newArray = [];
        for(let i = 0; i < nums.length-1; i++){
            let sumNum = nums[i] + nums[i+1];
            if(sumNum > 9){
                sumNum -= 10;
            }
            newArray.push(sumNum);
        }
        nums = newArray;
        len--;
    }
    return nums;
};
console.log(triangularSum([1,2,3,4,5]));