// // exrcise no  ;-1
// function rev(){
//     let array =[3,2,2,4,3];
//     array.reverse()
//     console.log(array.join(''));
//     // console.log(array);
//     }
// rev();

// 2.  
function palindrom(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = ('mi');
const value = palindrom(string);
console.log(value);

//3.
// let dog = (str) => {
//   let combinations = [];
//   for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j < str.length + 1; j++) {
//           combinations.push(str.slice(i, j));
//       }
//   }
//   return combinations;
// }
// console.log(dog('MIT'));

//4.
// function a(str)
//   {
//     return str.split('').sort().join('' );
//   }
// console.log(a("mitul"));

//5.

// function uppercase(str)
// {
//   var array = str.split(' ');
//   var array1 = [];

//   for(var x = 0; x < array.length; x++){
//     array1.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
//   }
//   return array1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));

// 6.
// var a = [2,5];
// var b = [2,5];
// for ( var i = 0; i < a.length;i++) {
//    a[i] = a[i]*a[i]*a[i]
//    b[i] = b[i]*b[i];
//   }
//   console.log("square",b);
//   console.log("Qube",a);

// 7.
// const number = parseInt("8");
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//  if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }




