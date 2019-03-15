var words =           // Word list
    [
        "animaniacs",
        "rugrats",
        "arthur",
        "futurama",
        "pokemon",
        "garfield",
        "Dexter",
        "catdog",
        "boug",
        "batman",
        "recess",
        "daria",
    ];

const lives = 10;            // Lives
var guessed = [];        // letters
var asnwerArray;           // word in the array
var word = [];          // the word 
var triesLeft = 0;       // tries left
var started = false;        // the game has started
var finished = false;       //to start again    
var wins = 0;                   // how many times win.

function resetGame() {
    triesLeft = lives;
    started = false;

    //random word
    asnwerArray = Math.floor(Math.random() * (words.length));
    guessed = [];
    word = [];

    document.getElementById("hangman").src = "";
    document.getElementById("win-image").src = "assets/images/win.jpg";
    document.getElementById("lose-image").src = "assets/images/gameover.jpg";

    // guessing word
    for (var i = 0; i < words[asnwerArray].length; i++) {
        word.push("_");
    }
    console.log(word)
    // "Hide"
    
    document.getElementById("pressKeyTryAgain").style.visibility='hidden';
    document.getElementById("lose-image").style.visibility='hidden';
    document.getElementById("win-image").style.visibility='hidden';
   
    
};

updateDisplay();

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < word.length; i++) {
        document.getElementById("currentWord").innerText += word[i];
    }
    document.getElementById("triesLeft").innerText = triesLeft;
    document.getElementById("guessed").innerText = guessed;
    if(triesLeft <= 0) {
        document.getElementById("lose-image").style.visibility='visible';
        document.getElementById("pressKeyTryAgain").style.visibility='visible';
        finished = true;
    }
};


function updatehangman() {
    document.getElementById("hangman").src = "" + (lives - triesLeft);

};

document.onkeyup = function(event) {
    if(finished) {
        resetGame();
        finished = false;
    } else {
            if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};


function makeGuess(letter) {
    if (triesLeft > 0) {
        if (!started) {
            started = true;
        }
        if (guessed.indexOf(letter) === -1) {
            guessed.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};

//replaces in the guess word.
function evaluateGuess(letter) {
    // to store store of letters 
    var store = [];

    // finding all letters store.
    for (var i = 0; i < words[asnwerArray].length; i++) {
        if(words[asnwerArray][i] === letter) {
            store.push(i);
        }
    }

    if (store.length <= 0) {
        triesLeft--;
        updatehangman();
    } else {
            for(var i = 0; i < store.length; i++) {
            word[store[i]] = letter;
        }
    }
};

function checkWin() {
    if(word.indexOf("_") === -1) {
        document.getElementById("win-image").style.visibility='visible';
        document.getElementById("pressKeyTryAgain").style.visibility='visible';
        wins++;
        finished = true;
    }
};