const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/ESTUDANDO PACAS.png');

    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');

    }
}
  
myButton.onclick = () => {
    setUserName();
}

if (!localStorage.getItems("name")) {
    setUserName();

} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = `Mozilla is cool, ${storedName}`;
}

function setUserName() {
    let myName = prompt("Please, enter your name below: ");

    if (!myName) {
        setUserName();

    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`
    }
}