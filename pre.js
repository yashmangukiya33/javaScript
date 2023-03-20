
//1

// let a = 10;
// let b = 20;
// let temp;

// temp = a;
// a = b;
// b = temp;

// console.log(`value of a=${a}`);
// console.log(`value of b=${b}`);


//2.


// let a = 10;
// if (a > 0)
// {
//     console.log(`enter number is positive ${a}`)
// }
// else if (a == 0)
// {
//     console.log(`enter numbre is 0`);
    
// }
// else if (a < 0)
// {
//     console.log(`emter number is nagetive ${a}`)
// }


//3.

// let a = 10;
// if (a%2==0)
// {
//     console.log(`number is even =${a}`);
// }
// else
// {
//     console.log(`number is odd =${a}`);
// }

//4.

// let first = 1000;
// let secound = 120;
// let third = 130;

// if (first>=secound && first>=third)
// {
//     console.log(`first number is largest ${first}`)
// }
// else if(secound>=first && secound>=third){
//     console.log(`second number is largest ${secound}`)

    
// }
// else if(third>=first && third>=secound) {
//     console.log(`third number is largest ${third}`)
// }


//5.


// let arr = [1000, 120, 130];
// console.log(Math.max(...arr));


//6.

// let a = 3;
// for (let i = 1; i <= 10; ++i)
// {
//     console.log(a, i, a * i);
// }


//7.

// let str="hello world";
// let rev=str.split("").reverse().join("");
// console.log(rev);



// 8. Return the youngest age of this array.
// let user = [
//     {
//         name: 'John',
//         age: 37,
//         hobbies: ['reading', 'coding'],
//     },
//     {
//         name: 'peter',
//         age: 23,
//         hobbies: ['reading', 'games', 'coding'],
//     },
//     {
//         name: 'jack',
//         age: 15,
//         hobbies: ['reading', 'games'],
//     },
//     {
//         name: 'devil',
//         age: 70,
//         hobbies: ['swiming', 'games', 'coding'],
//     }
// ];
// let age = user.filter((user) => user.age > 18);
// console.log(age)


// 14. return object after delete class field
// input: var student = {
//     name: "David Rayy",
//     class: "VI",
//     rollno: 12
// };

// delete student.class;
// console.log(student);


//15,


// let a = "Jone Wick From USA";
// let c = a.toLowerCase();
// let b = c.replace(/ /g, "-");
// console.log(b)

//10.

// let a = 5;
// let sum = 0;

// for (let i = 1; i <= a; i++){
//     sum += i;
// }
// console.log(sum)

// 9. Return the record of those whose hobby is not gaming.
// const user = [
//     {
//         name: 'John',
//         age: 37,
//         hobbies: ['reading', 'coding'],
//     },
//     {
//         name: 'peter',
//         age: 11,
//         hobbies: ['reading', 'games', 'coding'],
//     },
//     {
//         name: 'jack',
//         age: 17,
//         hobbies: ['reading', 'games'],
//     },
//     {
//         name: 'devil',
//         age: 70,
//         hobbies: ['swiming', 'games', 'coding'],
//     }
// ];
// // let res = user.filter(val => val.hobbies == "games");
// let res = user.filter(val => !val.hobbies.includes('games'))

// console.log(res);


// //11,

// let myColor = ["red", "green", "white", "black"];

// console.log(myColor.toString())
//13,

// var student = {
//     name: "david",
//     class: "vi",
//     rollno: 12
// };

// let prop = Object.getOwnPropertyNames(student);

// console.log(prop)

// 12. Return count of 'a'
// let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// let val = 1;
// let count = 0;
// let item;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         if (arr[i] == arr[j])
//             count++;
//         if (val < count) {
//             val = count;
//             item = arr[i];
//         }
//     }
//     count = 0;
// }
// console.log(val);

// 16. Find data whose first name is john or last name is wick
const user = [
    {
        name: {
            firstName: "john",
            lastName: "duo"
        },
        age: 37,
        hobbies: ['reading', 'coding'],
    },
    {
        name: {
            firstName: "peter",
            lastName: "donald"
        },
        age: 11,
        hobbies: ['reading', 'games', 'coding'],
    },
    {
        name: {
            firstName: "john",
            lastName: "wick"
        },
        age: 17,
        hobbies: ['reading', 'games'],
    },
    {
        name: {
            firstName: "devil",
            lastName: "duo"
        },
        age: 70,
        hobbies: ['swiming', 'games', 'coding'],
    }
]

let res = user.filter(val => val.name.firstName.includes('john')|| val.name.lastName.includes('wick'))



console.log(res)
// console.log(res2)

//18 count vowel

// let arr = "hello world";

// let vowel = /[aeiou]/g

// let res = arr.match(vowel);
// let length = res.length;
// console.log(length,res);

//22,
// let str = "hello world";
// let count = /[o]/g

// let res = str.match(count);
// let length = res.length;
// console.log(length,res)


//23
// let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
// let remove = (array,value) =>
//     array.filter((item) => item != value);

// console.log(remove(arr, "a"));

// 21 -----1

// let str = "hello world";
// let res = str.split(" ").map(str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }).join(" ");
// console.log(res);

//2------

let str = "HELLO WORLD";

 let res = str.split(" ").map(str => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}).join(" ");
console.log(res);


