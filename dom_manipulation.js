//get elementby id

// const heading = document.getElementById("heading");

//2,getelementsbytegname

// const heading=document.getElementsByTagName("h1")

//3,getelementbyclassname

// const heading=document.getElementsByClassName('heading')

//4,quaryselector

// const heading = document.querySelector("#heading");
// const heading = document.querySelector(".heading");

//5,quaryselectorall

//  const heading=document.querySelectorAll(".heading")



// traverse dom -----------------------------------
//1,parentnode

// const heading = document.querySelector(".heading");
// const parent = heading.parentNode;
// console.log(parent);


//2,childNode

// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);


//3,nextElementsibling


// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling);


//4, priviouselemenySibling

// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);



//manipulation-------------------------------------------------


// const heading = document.querySelector('.heading');
// heading.innerHTML = 'web dev is awesome';
// heading.style.color = 'red';
// heading.style.fontSize = '100px';
// heading.classList.add("tital")
// heading.classList.remove("heading")


// advance manipulation---------------------------------------

// const heading = document.createElement('h1');
// heading.innerHTML = "javascript is awesome";
// heading.classList.add("tital")

// const parent = document.querySelector('.parent');
// parent.appendChild(heading);// last element insert


// const subHeading = document.createElement('h3');
// subHeading.innerHTML = "web dev is awesome!";
// parent.appendChild(subHeading);

// const subHeading = document.createElement("h3");
// subHeading.innerHTML = "web dev is awesome";
// heading.insertAdjacentElement("beforebegin",subHeading)

// const subHeading = document.createElement("h3");
// subHeading.innerHTML = "web dev is awesome";
// heading.insertAdjacentElement("afterend", subHeading)

// console.log(heading);



//dom event -----------------------------------------------

// const button = document.querySelector('#btn');
// const heading = document.querySelector("#heading");

// button.addEventListener("click", function () {
//     heading.style.color = "purple";
//     heading.style.fontSize="60px"
//     console.log('button clicked', Event);
// });


 