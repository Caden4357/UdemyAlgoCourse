// How the built in sort method works in JS
// the default sort method sorts elements as strings and sorts them based on their UTF-16 code units 
// if you want to sort different from the default way, you have to pass in a compare function
// the compare function should return a negative value if the first argument should come before the second, a positive value if the first argument should come after the second, and 0 if they are equal
function numberCompare(num1, num2) {
    return num1 - num2;
}
console.log([6, 4, 15, 10].sort(numberCompare)); // [ 4, 6, 10, 15 ]

// Sort by length of string
function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
console.log(['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)); // [ 'Colt', 'Steele', 'Algorithms', 'Data Structures' ]
