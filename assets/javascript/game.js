  




  var guesses = 10;
  var letters = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
  var userGuess = "";
  var lettersGuessed;
  var computerPick;
  var wins = 0;
  var losses =0;



//When the user presses a key, it will run the following function...

document.onkeyup = function(event){

//Determine which key was pressed, make it lowercase, and set it to the userGuess variable. 

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// Sets the computerPick variable equal to a random choice from the letters array. 

	var computerPick = letters[Math.floor(Math.random() * letters.length)];

	var lettersGuessed = userGuess;

// If the user presses "a","b","c" etc., run the game logic.

if (userGuess === computerPick) {
	wins++;
}

else {

	guesses--;     
	losses++;
}

// Keeps from decrementing into negative numbers and refreshes page once all guesses are used. 

if (guesses<1) {

	window.location.reload();

}

if (userGuess != computerPick) {

document.querySelector("#lettersGuessed").innerHTML = userGuess


}

 // Creating a variable to hold our new HTML. Our HTML now keeps track of our wins/losses.

          var html = "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>";

          document.querySelector("#game").innerHTML = html;

          var html2 = "<h3>Guesses Left " + guesses + "</h3>";

          document.querySelector("#guessed").innerHTML = html2


};


