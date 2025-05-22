
// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/description/?envType=problem-list-v2&envId=7p5x763&sorting=W3sic29ydE9yZGVyIjoiREVTQ0VORElORyIsIm9yZGVyQnkiOiJGUkVRVUVOQ1kifV0%3D&page=1

var minimumOperations = function(nums) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(!map[nums[i]] && nums[i] > 0){
            map[nums[i]] = 1;
        }
    }
    return Object.keys(map).length;
};
console.log(minimumOperations([1,5,0,3,5]));