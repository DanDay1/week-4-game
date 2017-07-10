var wins = 0;
var losses = 0;

var redValue;
var blueValue;
var yellowValue;
var greenValue;

var loadTarget;
var loadCrystal;

var total

var options;

var trombone = new Audio('assets/audio/Sad_Trombone-Joe_Lamb-665429450.wav');

var trumpet = new Audio('assets/audio/Ta Da-SoundBible.com-1884170640.wav');


function targetNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var restart = function() {

    loadTarget = targetNumber(19, 120);

    loadCrystal = targetNumber(1, 12);

    redValue = loadCrystal;

    loadCrystal = targetNumber(1, 12);

    blueValue = loadCrystal;

    loadCrystal = targetNumber(1, 12);

    yellowValue = loadCrystal;

    loadCrystal = targetNumber(1, 12);

    greenValue = loadCrystal;

    total = 0;

}

var scoreBoard = function() {

    if (total == loadTarget) {
        wins = wins + 1;

        trumpet.play();
        restart();
    } else if (total > loadTarget) {
        losses = losses + 1;

        trombone.play();
        restart();
    }


    html = "<h2>Let's play!</h2>" +
        "<p class= 'wi'>wins: " + wins + "</p>" +
        "<p class= 'lo'>losses: " + losses + "</p>" +
        "<p class= 'ta'>target: " + loadTarget + "</p>" +
        "<p class= 'sc'>score: " + total + "</p>";

    //document.getElementById("game").innerHTML = html;
    $("#game").html(html);
}

$(document).ready(function() {

    $(".btn").on("click", function() {

        restart();

        scoreBoard();


        $('#red').click(function() {
            total = total + redValue;
            scoreBoard();
        });
        $('#blue').click(function() {
            total = total + blueValue;
            scoreBoard();
        });
        $('#yellow').click(function() {
            total = total + yellowValue;
            scoreBoard();
        });
        $('#green').click(function() {
            total = total + greenValue;
            scoreBoard();
        });

    });

});
