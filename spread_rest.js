
//-------spread------

// COPY :

// const number = [1, 2, 3, 4];
// const newnumber = [...number];
// newnumber.push(4);

// console.log(newnumber);
// console.log(number);


//merge:

// const number = [1, 2, 3, 4];
// const newnumbe = [10, 20, 30, 40];

// console.log([...newnumbe,...number]);


// //compose:


// const number = [1, 2, 3, 4];
// const newnumbe = [10, 20, 30, 40];

// console.log(100, ...number, [...newnumbe], 200);


// string:

// const name = 'yash';
// console.log(...name);

// const name = 'yash';
// const lastname = 'mangukiya';
// console.log([...name],[...lastname])


//object -- copy

//--- it does shallow copy

// const order = {
//     id: '1',
//     date: '29/08/2022',
//     name: 'yash',
//     items: ['1', '2'],
// };

// const neworder = {
//     ...order,
// };
// order.items.push('3')
// neworder.items.push('4')
// console.log(neworder);
// console.log(order);


//mearge 2 object

// const user = {
//     name: 'yash',
//     city: 'surat',
// };

// const add = {
//     street: "main street",
// };

// const newobject = {
//     ...add, ...user,
// };
// console.log(newobject);



// ---------- rest-------------


// function sum(number1,  ...number) {
//     console.log(number);
//     let result = 0;
//     for (let num of number) {
//         result += num;
//     }
//     return result;
// }
// console.log(sum(3, 4, 5, 6));



// disructuring using rest:

const user = {
    name: 'yash',
    city: 'surat',
    street: 'main street',
};
const { city, ...add } = user;
console.log(city,  add);