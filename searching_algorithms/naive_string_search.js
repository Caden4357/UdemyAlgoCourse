// Goal: given a string and a pattern determine how many times the pattern appears in the string
// Example: string = "lorie loled", pattern = "lol" => 1
// Example: string = "lorie loled", pattern = "lo" => 2
// Example: string = "lorie loled", pattern = "pop" => 0

// Loop over longer string 
// Loop over shorter string
// If characters don't match, break out of inner loop
// If characters do match, keep going
// If you complete the inner loop and find a match, increment the count of matches
// Return the count

function stringSearch(string, pattern) {
    let count = 0;
    for(let i = 0; i < string.length; i++){
        for (let j = 0; j < pattern.length; j++){
            if(string[i+j] !== pattern[j]){
                break;
            }
            if(j === pattern.length - 1){
                count++
            }
        }
    }
    return count;
}
console.log(stringSearch("lorie loled", "lo")); // 2