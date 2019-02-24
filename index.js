
//Detecting Button Press

var numOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numOfDrumButtons; i++ ){

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //this is an anonymous function

      var buttonInnerHTML=this.innerHTML;

      makeSound(buttonInnerHTML); //if w on screen, it will be makeSound(w), then jumps to switch cases

      animationWhenClicked(buttonInnerHTML);

  });
}

//Detecting Keyboard Press

document.addEventListener("keydown", function(event){

    makeSound(event.key); //if w on keyboard, it will be makeSound(w), then jumps to switch cases

    animationWhenClicked(event.key);

});

function makeSound(key){

  switch (key) {

  case "w":
      var tom1 = new Audio ("sounds/tom-1.mp3");
      tom1.play();
      break;

  case "a":
      var tom2 = new Audio ("sounds/tom-2.mp3");
      tom2.play();
      break;

  case "s":
      var tom3 = new Audio ("sounds/tom-3.mp3");
      tom3.play();
      break;

  case "d":
      var tom4 = new Audio ("sounds/tom-4.mp3");
      tom4.play();
      break;

  case "j":
      var crash = new Audio ("sounds/crash.mp3");
      crash.play();
      break;

  case "k":
      var kickBass = new Audio ("sounds/kick-bass.mp3");
      kickBass.play();
      break;

  case "l":
      var snare = new Audio ("sounds/snare.mp3");
      snare.play();
      break;

  default: console.log(buttonInnerHTML);
      break;

  }
}

function animationWhenClicked(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
}
