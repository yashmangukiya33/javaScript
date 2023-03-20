// 1. Write a JS function that reverse a number.
// let number = (num) => {
//     let rev = num.toString().split("").reverse().join("");
//     console.log(rev);
// };
// number("yashh");


// 2. Write a JS function that checks whether a passed string is palindrome or not

let value = 11211;
let revVal = () => {
    let revVal = value.toString().split("").reverse().join("");
    let strVal = value.toString();

    if (revVal == strVal) {
        console.log("palindrome",revVal);
    }
    else {
        console.log("not palidrome");
    }
};

revVal();


// 3. Write a JS function that generates all combinations of a string.
// Example string: 'dog'
// Expected Output: d,do, dog, o, og, g

// let combinations = (str) => {
//     let string = [];
//     for (let i = 0; i < str.length + 1; i++) {
//         for (let j = i+1; j < str.length + 1; j++) {
//             string.push(str.slice(i, j))
//         }
//     }
//     return string
        
    
// };
// console.log(combinations("dog"));



// 4. Write a JS function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


