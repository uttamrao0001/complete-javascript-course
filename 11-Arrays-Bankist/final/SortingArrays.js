'use strict'

const arr = [435, 65, -232, 545, 0, 43423, 556, -43645, 3, -45, 3];
console.log(arr.sort((a, b) => {
    return a - b;
}));

console.log(arr.sort((a, b) => {
    return b - a;
}));

//NOTE: unlike in cpp the callback fn for sort fn in JS takes positive no in case of reverse the order and negative number if want to keep the order.

//trick  for ascending the final array a - b will be negative and so if we want to keep the array we should return a-b
//opposite for descending order.