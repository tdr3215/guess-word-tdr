console.log("hello world");

// Initialize variabales
let wordGuess;

let wordToDisplay;

let wrongLetter;

// Select Elements

const body = document.body;
const wordGuessDiv = document.querySelector(".word-to-guess");

body.addEventListener("keydown", (evt) => {
  let currKey = evt.key;
  console.log(currKey);
});

// function definitions

function addWordToGuess() {
    wordGuessDiv.innerHTML = "";
    
}

// create an array for the word

// create conditional for if the answer is right or wrong

// loop through the array to
