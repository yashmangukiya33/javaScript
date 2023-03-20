function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject("error while registering...");
            console.log('register end');
            // reject();
            resolve();
        }, 1000);
    })

}
function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject('error whlile send email');
            console.log('email end');
            resolve();
        }, 2000)
    })
;
}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('login end');
            resolve();
        }, 3000); 
    })

}
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got User Data');
            resolve();
        }, 1000);   
    })

}
function displayUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User Data Displayed');
            resolve();
        }, 3000);
    })
 
}


// callbaCK HELL


// register(function () {
//     sendEmail(function () {
//         login(function () {
//             getUserData(function () {
//                 displayUserData();
//             });
//         });
//     });
// });


// promise:
// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => {
//         console.log("error", err);
//     })


//async await

// async function authenticate() {
//     await register();
//     await sendEmail();
//     await login();
//     await getUserData();
//     await displayUserData();

// }

// try meyhod

async function authenticate() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
    } catch (err) {
        console.log(err);
        throw new Error();
    }
    }




authenticate().then(() => {
    console.log('all set');  
}) .catch((err) => {
    console.log(err);
});
console.log("other application work!")