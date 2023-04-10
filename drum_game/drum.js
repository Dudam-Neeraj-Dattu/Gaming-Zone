var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var soundrecord = "";

document.querySelector(".start").addEventListener("click", startrecording);
document.querySelector(".play").addEventListener("click", playrecording);
document.querySelector(".startnew").addEventListener("click", startnewrecording);

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("../drum_game/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("../drum_game/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('../drum_game/sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('../drum_game/sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('../drum_game/sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('../drum_game/sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('../drum_game/sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}

function startrecording() {
  alert("Recording is started, instructions will be displayed.");
  document.querySelector(".heading_description").innerHTML = "Press the instrument button or the corresponding letter on the keyboard";
  document.getElementById("startnew").style.display = "inline";
  document.getElementById("start").style.display = "none";
  for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

      var buttonInnerHTML = this.innerHTML;

      soundrecord += buttonInnerHTML;
      console.log(soundrecord);

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);

    });

  }

  document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

  });

}

function playrecording() {
  document.querySelector(".play").innerHTML = "Play Again";
  var i = 0, max = soundrecord.length, delay = prompt("enter the speed in milliseconds at which you want to play :"), run;
  run = function () {
    buttonAnimation(soundrecord[i]);
    makeSound(soundrecord[i]);
    console.log(soundrecord[i]);
    if (i++ < max) {
      setTimeout(run, delay);
    }
  }
  run();
  document.getElementById("startnew").style.display = "inline";
  document.getElementById("start").style.display = "none";
}

function startnewrecording() {
  window.location.reload();
}


document.getElementById("startnew").style.display = "none";



