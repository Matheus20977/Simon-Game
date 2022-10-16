var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameHasStarted = 0;
var level = 0;

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function nextSequence() {
  level++;
  $("h1").text("Level " + level);

  //randomly picks one of the colours
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); //stores the sequence in order

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100); //button flash animation

  //plays the randomly picked button's audio
  playSound(randomChosenColour);
}

$(document).keypress(function() {
  if (!gameHasStarted) {
    $("h1").text("Level " + level);
    nextSequence();
    gameHasStarted = 1;
  }
});

$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});
