/*
    1. Log out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program log out "Program complete!"
    4. Run the program and watch it crash

    5. Create a try/catch block that console.error's out 
       the error message
    6. Run the program again and see the difference
*/

console.log("program start");
try {
    throw new error("uh oh!");
} catch (error) {
    console.log(error);
};
console.log("programing complete");