// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end(end not included) where start and end represent the index of items in that array.The original array will not be modified.
let a = [1, 2, 3, 4, 5, 6, 7];
// let b = a.slice(2);
// let b = a.slice(1,4);
// let b = a.slice(2,-1);
// let b = a.slice(2,-3);
let b = a.slice(-3);
console.log(b)