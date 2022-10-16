var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  //randomly picks one of the colours
  var randomNumber = Math.round(Math.random() * 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); //stores the sequence in order

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100); //button flash animation

  //plays the randomly picked button's audio
  var colorAudio = new Audio("sounds/" + randomChosenColour + ".mp3");
  colorAudio.play();
}

$(".btn").click(function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
