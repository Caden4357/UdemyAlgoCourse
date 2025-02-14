// like merge sort this exploits the arrays of 0 or 1 are always sorted 
// works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array 
// once the pivot is positioned appropiately, quick sort can be applied on either side of the pivot 

function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
            // console.log(arr);
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
    // console.log(arr);
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        console.log('anotha one');
        console.log(left, right );
        let pivotIdx = pivot(arr, left, right);
        // left 
        quickSort(arr, left, pivotIdx - 1)
        // right
        quickSort(arr, pivotIdx + 1, right)
    }
    console.log(left, right );

    // console.log(arr);
    return arr;
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));