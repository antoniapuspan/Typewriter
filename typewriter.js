"use strict";
//read text
let myElement = document.querySelector(".typewritten");
let keyAudio1 = document.getElementById("typekey1");
let keyAudio2 = document.getElementById("typekey2");
let spaceAudio = document.getElementById("typespace");
let lastKey = document.getElementById("typelast");
let keySounds = [keyAudio1, keyAudio2];
typeScript(myElement);
setInterval(function () {
    typeScript(myElement)
}, 10000)
//created variable to show as null
function typeScript(n) {
    let myText = n.innerHTML;
    let toShow = "";
    myElement.innerHTML = toShow;
    let i = 0;
    let myInt = setInterval(function () {
        toShow = toShow + myText[i];
        n.innerHTML = toShow;
        if (myText[i] == " ") {
            playSound(spaceAudio);
        } else {
            let random = Math.floor(Math.random() * 2)
            console.log(random);

            playSound(keySounds[random]);
        }
        i++;

        if (i == myText.length) {
            playSound(lastKey);
            clearInterval(myInt);
        }
    }, 200)
}

function playSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.play();

}