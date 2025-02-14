// insertion sort 
// start by picking the second element in the array 
// compare it with the element before swap if its smaller 
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++){
        let val = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > val; j--){
            arr[j+1] = arr[j]
            console.log(arr);
        }   
        arr[j+1] = val
    }
    return arr;
}
console.log(insertionSort([2,1,9,76,4]));

// time complexity O(n^2) 
// space complexity O(1)