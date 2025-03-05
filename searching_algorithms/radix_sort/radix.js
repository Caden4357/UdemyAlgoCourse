function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
console.log(getDigit(7323, 2));

function digitCount(num){
    return num.toString().length
}
console.log(digitCount(3));

// refactored 
function mostDigits(nums){
    let biggest = 0;
    for(let num of nums){
        biggest = Math.max(biggest, digitCount(num))
    }
    return biggest
}
console.log(mostDigits([1,1,11111,22]));

function radixSort(nums){
    let maxDgCount = mostDigits(nums)
    for(let k = 0; k < maxDgCount; k++){
        let dgBuckets = Array.from({length:10}, () => []) // this creates an empty array with 10 empty sub arrays for our 10 buckets
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            dgBuckets[digit].push(nums[i])
        }
        nums = [].concat(...dgBuckets)
        console.log(nums);
    }
    return nums
}
console.log(radixSort([23,345,43,1234,6,4,7,234]));





// from udemy
// function digitCount(num){
//     if(num === 0) return 1;
//     return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums){
//     let biggest = 0;
//     let dg;
//     for(let num of nums){
//         dg = digitCount(num)
//         if(dg > biggest){
//             biggest = dg
//         }
//     }
//     return biggest
// }