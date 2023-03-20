let arr=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// arr[19] =200;
// arr[15] =200;
// delete arr [4];
// delete arr [8];
// delete arr[6];
// arr[4] = undefined;
// arr[8] = undefined;

// console.log(arr);
// console.log(arr.length);



// let arr2 = [10, 20, 30];
// arr2.push(50);
// console.log(arr2);
// console.log(arr2.length);

const str1 = '5';

console.log(str1.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// Expected output: "************5581"
