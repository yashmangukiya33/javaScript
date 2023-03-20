
/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds
    HINT: Use setTimeout for the delay
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000);
});

Promise.all([promise1,promise2]).then((values) => {
    const firstValue = values[0];
    const secoundValue = values[1];
    console.log(values);
    console.log(firstValue, secoundValue);
    console.log(firstValue + secoundValue);


});

