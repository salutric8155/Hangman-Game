/*		-------EXAMPLE------
  function changefont()
            {

                var x = document.getElementById("cn");
                x.style.fontSize = "25px";           
                x.style.color = "red"; 
            }
*/
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var wins = 0;
var numberOfGuessesRemaining = 10;
var lettersGuessed = " ";
var currentWord = " ";

document.onkeyup = function(event) {

	var userGuesses = event.key;









