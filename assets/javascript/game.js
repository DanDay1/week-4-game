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

function targetNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var restart = function() {

    loadTarget = targetNumber(19, 120);

    console.log("found randomNumber is " + loadTarget);

    loadCrystal = targetNumber(1, 12);

    redValue = loadCrystal;

    loadCrystal = targetNumber(1, 12);

    blueValue = loadCrystal;

    loadCrystal = targetNumber(1, 12);

    yellowValue = loadCrystal;

    loadCrystal = targetNumber(1, 12);

    greenValue = loadCrystal;

    console.log("red value is " + redValue);
    console.log("blue value is " + blueValue);
    console.log("yellow value is " + yellowValue);
    console.log("green value is " + greenValue);

    total = 0;

}

var scoreBoard = function() {

    if (total == loadTarget) {
        wins = wins + 1;

        // audio.play();
        restart();
    } else if (total > loadTarget) {
        losses = losses + 1;

        // audio.play();
        restart();
    } else {
        // updateAddition();
    }


    html = "<h2>Hit any key to begin!</h2>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>target: " + loadTarget + "</p>" +
        "<p>score: " + total + "</p>";

    document.getElementById("game").innerHTML = html;
}

document.onkeyup = function(event) {

    restart();

    scoreBoard();

    $(document).ready(function() {
        $('#red').click(function() {
            total = total + redValue;
            console.log("total value is" + total);
            scoreBoard();
        })
        $('#blue').click(function() {
            total = total + blueValue;
            console.log("total value is" + total);
            scoreBoard();
        })
        $('#yellow').click(function() {
            total = total + yellowValue;
            console.log("total value is" + total);
            scoreBoard();
        })
        $('#green').click(function() {
            total = total + greenValue;
            console.log("total value is" + total);
            scoreBoard();
        })

    });

}

