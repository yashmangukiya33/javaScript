//fill

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr.fill(0)); \0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// console.log(arr.fill(0, 5)); [10, 20, 30, 40, 50,0, 0, 0, 0, 0]
// console.log(arr.fill(0, 2, 5)); 10, 20, 0, 0, 0,60, 70, 80, 90, 100]
// console.log(arr.fill(0,3,5));


//find

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const found = arr.find(find10);
// function find10(item) {
//     return item === 100,10;
// }
// console.log(found);


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let found = () => {
//     arr.find(10)
// }


let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let newArray = arr.filter((elem, index, arr) => {
    console.log(`${elem},index no ${index} and ${arr}`);
    return elem > 10;
})
console.log(newArray);


// let inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// function isapple(fruit) {
//     return fruit.name === "apples";
//  }

// console.log(inventory.find(isapple));


// findindex

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let index = arr.findIndex((arr) => arr === 10);
// console.log(index)


// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let index = arr.findIndex((arr) => arr === 20,1);
// console.log(index);
