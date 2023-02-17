var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var randomChosenColor;
var clickedPattern = [];

function nextSequence() {
    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randNum];
    gamePattern.push(color);

    $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100);
    var audio = new Audio("sounds/" + color + ".m4a");
    audio.play();
}

$(".btn").on("click", function() {
    var chosenColor = $(this).attr("id");
    clickedPattern.push(chosenColor);
});

function playSound(name) {
    var randNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randNum];
    gamePattern.push(color);

    $("#" + color).fadeOut(100).fadeIn(100).fadeOut(100);
    var audio = new Audio("sounds/" + color + ".m4a");
    audio.play();
}
