/*		-------EXAMPLE------
  function changefont()
            {

                var x = document.getElementById("cn");
                x.style.fontSize = "25px";           
                x.style.color = "red"; 
            }
*/
/*
var wordLength = word.length;
var underscores = "";
for(i=0; i<wordLength; i++) {
    underscores = underscores + "_ "
}
var word = movie[Math.floor(Math.random()*movie.length)];
var word = "";
var randomMovie = Math.floor(Math.random() * Object.keys(movies).length);
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var movies = {
	"the goonies" : {"g", "o", "o", "n", "i", "e", "s"},
	"die hard" : {"d", "i", "e", "h", "a", "r", "d"}
};
*/

/*function myFunction(userChoice);}
			 */
window.onload = function () {

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var movie = ["the goonies", "die hard"];
var wins = 0;
var numberOfGuessesRemaining = 10;
var lettersGuessed = [];
var theGoonies = ["g", "o", "o", "n", "i", "e", "s"];
var dieHard = ["d", "i", "e", "h", "a", "r", "d"]
var space; 
var guess;
var geusses = [];
var word;
var categories;     
var chosenCategory;

var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

    var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Movies";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is brands of cars";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is whiskeys";
    }
  }

result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

     comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

 play = function () {
    categories = [
        ["The Goonies", "Die Hard", "Beverly Hills Cop", "Gremlins", "Top Gun", "The Karate Kid", "Weird Science"],
        ["Ford", "Chevrolet", "Dodge", "Toyota", "Nissan"],
        ["Makers Mark", "Jack Daniels", "Jim Beam", "Crown Royal", "Johnny Walker"]
    ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

 play();

/*document.onkeydown = function(event) {

	var userChoice = event.key;
	var currentWord = movie[Math.floor(Math.random()*movie.length)];
	document.getElementById("word").innerHTML = currentWord[""];

	if(movie === "the goonies"){
		if((userChoice === "g") || (userChoice === "o") || (userChoice === "o") || (userChoice === "n") || (userChoice === "i") || (userChoice === "e") || (userChoice === "s"))
			{return

			}

				

	var html = "<p>PRESS ENTER TO START</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>Current word: " + currentWord + "</p>" +

*/
/*
	document.querySelector("#main").innerHTML = html;
};
*/








}