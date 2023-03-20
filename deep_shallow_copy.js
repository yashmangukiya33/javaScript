//primitive datatype   -> deep copy

// let originalValue = 10;
// let copiedValue = originalValue;

// console.log(originalValue)
// console.log(copiedValue)

// copiedValue = 20;


// console.log(originalValue)
// console.log(copiedValue)

// -----------------------------------

//non-primitive datatype  ->deep copy


//jason stringfy()

//object can't copy function inside object

// let originalValue = {
//     name: 'yash',
//     age: 21,
// };
// let copiedValue = JSON.parse(JSON.stringify(originalValue));


// console.log(originalValue)
// console.log(copiedValue)

// copiedValue.name = 'mangukiya';


// console.log(originalValue)
// console.log(copiedValue)


// deep copy using spread oprator

let originalValue = {
    name: 'yash',
    age: 21,
    getname: function () {
        return this.name;
    },
    address: {
        city: 'dehli',
        country:'india',
    }
    
};

let copiedValue = { ...originalValue };

copiedValue = {
    ...copiedValue,
    name: 'mangukiya',
    age:23,
    address: {
        ...copiedValue.address,
        city:'surat'
    }
    
}

console.log(originalValue)
console.log(copiedValue)





