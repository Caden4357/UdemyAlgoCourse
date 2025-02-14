// essentially the opposite of bubble sort, you find the smallest value and swap it with the first element
// store the first element as the smallest value
// compare the smallest value to the next element and if its smaller, store that index as the smallest value
// if the smallest value is not the index you started with, swap the two values
// repeat with the next element
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        if(i !== smallest){
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([34,22,10,19,17])); // [ 10, 17, 19, 22, 34 ]

// Time complexity is O(n^2) because of the nested loops
// Space complexity is O(1) because we are not creating any new data structures
// Selection sort is good if you want to minimize the number of swaps you make 