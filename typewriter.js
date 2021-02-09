"use strict";
//read text
let myElement = document.querySelector(".typewritten");

setInterval(function () {
    typeScript(myElement)
}, 8000)
//created variable to show as null
function typeScript(n) {
    let myText = n.innerHTML;
    let toShow = "";
    myElement.innerHTML = toShow;
    let i = 0;

    let myInt = setInterval(function () {
        toShow = toShow + myText[i];
        n.innerHTML = toShow;
        i++;
        if (i == myText.length) {
            clearInterval(myInt);
        }
    }, 200)


}