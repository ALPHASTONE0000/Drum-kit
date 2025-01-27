var length = document.querySelectorAll("button").length;

// detecting Click
for (let i = 0; i < length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (event) {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}


// Detecting Keypress
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


// Make a sound
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var crash = new Audio("./sounds/kick-bass.mp3");
            crash.play();
            break;
        case "s":
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
            break;
        case "d":
            var crash = new Audio("./sounds/tom-1.mp3");
            crash.play();
            break;
        case "j":
            var crash = new Audio("./sounds/tom-2.mp3");
            crash.play();
            break;
        case "k":
            var crash = new Audio("./sounds/tom-3.mp3");
            crash.play();
            break;
        case "l":
            var crash = new Audio("./sounds/tom-4.mp3");
            crash.play();
            break;
        default:
            console.log("not a key!");
   }
}

// button animation

function buttonAnimation(currentButton) {
    var activeButton = document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}