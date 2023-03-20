// let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

// let val = 1;
// let count = 0;
// let temp;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++)
//     {
//         if (arr[i] == arr[j])
//             count++;
        
//         if (val < count)
//         {
//             val = Count
//             temp = arr[i];

//             }
        
            
//     }
//     count = 0;
    
// }

// console.log(  val);


let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let val = 1;
let count= 0;
let item;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        if (arr[i] == arr[j])
            count++;
        if (val < count) {
           val = count ;
            item = arr[i];
        }
    }
   count= 0;
}
console.log( val) ;
