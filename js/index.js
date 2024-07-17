// 1 misol

// function commonElements(arr1, arr2) {
//     let common = [];
//     for(let i = 0; i < arr1.length;i++){
//         if(arr2.includes(arr1[i])){
//             if(!common.includes(arr1[i])){
//                 common.push(arr1[i])
//             }
//         }
//     }
//     return common
// }

// console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); 

// 2 misol

// function commonElements(arr1, arr2) {
//     let common = [];
//     for(let i = 0; i < arr1.length;i++){
//         if(arr2.includes(arr1[i])){
//             if(!common.includes(arr1[i])){
//                 common.push(arr1[i])
//             }
//         }
//     }
//     return common.join('')
// }

// console.log(commonElements("hello", "world")); 

// 3 misol 

// function symmetricDifference(arr1, arr2) {
//     let result = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }
    
//     for (let i = 0; i < arr2.length; i++) {
//         if (!arr1.includes(arr2[i])) {
//             result.push(arr2[i]);
//         }
//     }
    
//     return result;
// }

// console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));

// 4 misol(bunga chunmadim)

// 5 misol

// function uniqueCharacters(str) {
//     let uniqueChars = [];
    
//     for (let i = 0; i < str.length; i++) {
//         if (!uniqueChars.includes(str[i])) {
//             uniqueChars.push(str[i]);
//         }
//     }
    
//     return uniqueChars.join('');
// }

// console.log(uniqueCharacters("hello world")); // "helo wrd"

// 6 misol


// function findPairs(arr, target) {
//     let pairs = []
//     for(let i = 0; i < arr.length; i++){
//         for(let g = 0; g < arr.length; g++){
//             if(arr[i] + arr[g] == target)
//             pairs.push([arr[i], arr[g]])
//         }
//     }
//     return pairs
// }

// console.log(findPairs([1, 2, 3, 4, 5], 6));

// 7 misol

// function squareNumbers(arr) {
//     let new_arr = []
//     for(let i = 0; i < arr.length; i++){
//         let kvadrat = arr[i] ** 2
//         new_arr.push(kvadrat)
//     }
//     return new_arr
// }

// console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// 8 misol

// function isPalindrome(num) {
//     let str = num.toString();
//     return str === str.split('').reverse().join('');
// }

// function countPalindromNumbers(start, end) {
//     let count = 0;
    
//     for (let i = start; i <= end; i++) {
//         if (isPalindrome(i)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// console.log(countPalindromNumbers(1, 100)); // 18 (1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99)

// 9 misol


// function joinWithCommas(arr) {
//     return arr.join(', ');
// }

// console.log(joinWithCommas([1, 2, 3, 4, 5])); // "1, 2, 3, 4, 5"