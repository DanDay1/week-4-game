var wins=0;
var losses=0;
var score=0;

var loadTarget = targetNumber(10, 120);
var loadChrystal = targetNumber(1, 10);

function targetNumber (l, h) {
	for (var i = 0; i < 500; i++){
		var randomNumber = options[Math.floor(Math.random() * options.length)];
		if(randomNumber >= l && randomNumber <= h) {
			return randomNumber;
		}
	}
}


var html = "<h2>Hit any key to begin!</h2>" +
		"<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>target: " + loadTarget + "</p>" +
        "<p>score: " +	score + "</p>";

	document.getElementById("game").innerHTML=html;