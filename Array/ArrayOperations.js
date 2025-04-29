let arr = [1,2,3,4,5];
let number = arr.push(7);
// array.push push the element to an array and returns the new length of the array.
console.log(arr)
console.log(number)
// array filter find out all the even nos
let numbers = arr.filter((_ , idx) => arr[idx] % 2 === 0);
console.log(numbers);
// join operation

let s = arr.join(" ");
console.log(s);
let numbers2 = arr.toSpliced(1 , 1);
console.log(numbers2);
console.log(arr);
// find out an element exist or not
let b = arr.includes(8);
console.log(b);
// find the index of the element
let number1 = arr.findIndex((num) => num === 8);
console.log(number1);




