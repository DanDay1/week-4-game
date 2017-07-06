var wins = 0;
var losses = 0;
//var score = 0;

var redValue;
var blueValue;
var yellowValue;
var greenValue;

var loadTarget;
var loadCrystal;

var total = 0;

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

    // function targetNumber (l, h) {
    // 	for (var i = 0; i < 500; i++){
    // 		function getRandomArbitrary(19, 120) {
    //   return Math.random() * (19 - 120) + 19;
    // }
    // var randomNumber =;
    // console.log("1 randomNumber is " + randomNumber);
    // // var randomNumber = options[Math.floor(Math.random() * options.length)];
    // if(randomNumber >= l && randomNumber <= h) {

    // 	console.log("found randomNumber is " + randomNumber);

    // 	return randomNumber;
    // }
    // 	}
    // }
    // loadTarget = targetNumber(19, 120);

    // console.log("found randomNumber is " + loadTarget);

    // loadCrystal = targetNumber(1, 12);

    // redValue = loadCrystal;

    // loadCrystal = targetNumber(1, 12);

    // blueValue = loadCrystal;

    // loadCrystal = targetNumber(1, 12);

    // yellowValue = loadCrystal;

    // loadCrystal = targetNumber(1, 12);

    // greenValue = loadCrystal;

    restart();

    scoreBoard();

    // console.log("red value is " + redValue);
    // console.log("blue value is " + blueValue);
    // console.log("yellow value is " + yellowValue);
    // console.log("green value is " + greenValue);



    // var blue = Math.floor((Math.random()* 12) + 1);
    // var yellow = Math.floor((Math.random()* 12) + 1);
    // var green = Math.floor((Math.random()* 12) + 1);

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

    //var score = total;

}

// $('.crystal').on('click', function(){
// 	score = + parseInt($(this).data('num'));
