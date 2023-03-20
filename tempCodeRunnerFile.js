let value = 1215;
let revVal = () => {
    let revVal = value.toString().split("").reverse().join("");
    let strVal = value.toString();

    if (revVal == strVal) {
        console.log("palindrome");
    }
    else {
        console.log("not palidrome");
    }
};

revVal(