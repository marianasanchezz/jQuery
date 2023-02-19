var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var randomChosenColor;
var clickedPattern = [];
var level = 0;
var active = false;

$(document).keypress(function() {
    if (!active) {
        $("#level-title").text("Level " + level);
        nextSequence();
        active = true;
    }
})

function nextSequence() {
    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randNum];

    clickedPattern = [];

    level++

    $("#level-title").text("Level " + level);

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    animatePress(randomChosenColor);
}

$(".btn").on("click", function() {
    var chosenColor = $(this).attr("id");
    clickedPattern.push(chosenColor);

    playSound(chosenColor);
    animatePress(chosenColor);
    checkAnswer(clickedPattern.length - 1);
});

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".m4a");
    audio.play();
}

function animatePress(color) {
    $("#" + color).addClass("pressed");

    setTimeout(function () {
        $("#" + color).removeClass("pressed");
      }, 100);
}

function checkAnswer(currLevel) {
    if (clickedPattern[currLevel] === gamePattern[currLevel]) {
        console.log("success");
        if (clickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    } else {
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {

            $("body").removeClass("game-over");
          }, 200);
        
        playSound("wrong");
        $("h1").text("Game Over - Press Any Key to Restart");
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    active = false;
}