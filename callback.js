function register(callback) {
    setTimeout(() => {
        console.log('register end');
        callback();
    }, 1000);
}
function sendEmail(callback) {
    setTimeout(() => {
        console.log('email end');
        callback();
    }, 5000);
}
function login(callback) {
    setTimeout(() => {
        console.log('login end');
        callback();
    }, 2000);
}
function getUserData(callback) {
    setTimeout(() => {
        console.log('Got User Data');
        callback();
    }, 1000);
}
function displayUserData(callback) {
    setTimeout(() => {
        console.log('Usre Data Displayed');
        
    }, 1000);
}


// callbaCK HELL


register(function () {
    sendEmail(function () {
        login(function () {
            getUserData(function () {
                displayUserData();
            });
        });
    });
});

console.log("other application work!")