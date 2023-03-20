//1.sum of 2 number eual to 100 check if true


// const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b)===100;
// console.log(isEqualTo100(100, 0));
// console.log(isEqualTo100(0, 100));

// console.log(isEqualTo100(12, 00));
// console.log(isEqualTo100(0, 100));


// console.log(isEqualTo100(50,50));
// console.log(isEqualTo100(70,30));

//2.filename extentione at end

// const getFileExtension = (str) => str.slice(str.lastindexof('.'));

// console.log(getFileExtension('index.html'));

// function getFileExtension(filename) {

//      get file extension
//     const extension = filename.split('.').pop();
//     return extension;
// }

//  passing the filename
// const result1 = getFileExtension('module.js');
// console.log(result1);

// const result2 = getFileExtension('module.txt');
// console.log(result2);

// const fileName = "yash.js";
// const fileNames = "main.php";

// console.log(fileName.split(".").pop());
// console.log(fileNames.split(".").pop());

//3.

const searchRegExp = /\s/g;
const replaceWith = '-';
const result = 'duck duck go'.replace(searchRegExp, replaceWith);