// In this problem we are looking at 2 arrays and seeing if the second array contains squared numbers from the first array for example 
// [1,2,3,2,5] & [9,1,4,4,25] is a match and returns true but [1,2,3,2,5], [9,1,4,4,11] does not 
function same(arr1, arr2){
    // arrays have to be the same length for this to work
    if(arr1.length !== arr2.length){
        return false;
    }
    // create 2 objects to show the numbers and how often they appear
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        // short hand for create the key val pair at 1 or increase by one 
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        console.log(frequencyCounter2[key ** 2]);
        // Check key against FC2
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        // Check value against FC2
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
