// just merging
// function merge(arr1, arr2){
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length){
//         console.log(arr1[i], arr2[j]);
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++
//         }else if(arr1[i] > arr2[j]){
//             result.push(arr2[j])
//             j++
//         }
//     }
//     if(i === arr1.length){
//         console.log('HERE');
//         for(let k = j; k < arr2.length; k++){
//             result.push(arr2[k])
//         }
//     }
//     else if(j === arr2.length){
//         for(let k = i; k < arr2.length; k++){
//             result.push(arr1[k])
//         }
//     }
//     return result
// }
// console.log(merge([1,10,50],[2,14,99,100]));

// ! Refactored

// just merging
function merge(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length){
        console.log(arr1[i], arr2[j]);
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j]);
        j++
    }
    return result
}
console.log(merge([1,10,50],[2,14,99,100]));

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,midPoint));
    let right = mergeSort(arr.slice(midPoint))
    return merge(left, right)
}
console.log(mergeSort([66,45,78,2,34,90,3]));