let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
myHeading.textContent="Hello World";
let imageElement = document.querySelector('img');
imageElement.onclick = function () {
    let imageSource = imageElement.getAttribute('src');
    if(imageSource === 'images/pen1.jpg') {
        imageElement.setAttribute('src', 'images/pen-refill.jpg'); 
    }
    else if(imageSource === 'images/pen-refill.jpg') {
        imageElement.setAttribute('src', 'images/pen1.jpg');
    }
}
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(myName===null || !myName)
        setUserName();
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }  
  myButton.onclick = function() {
    setUserName();
  }