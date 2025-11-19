

let tNumber = Math.ceil(Math.random() * 6);

// Henter elementene fra HTML fila
const guessInputEl = document.getElementById("inputGuess");
const guessButtonEl = document.getElementById("buttonGuess");
const guessOutputEl = document.getElementById("outputGuess");

// Legger til en event når man trykker på knappen:
guessButtonEl.addEventListener("click", guessNumber);

// Lager funksjonen som kjøres av guessButtonEl
function tNumber(){
    let guess = Number(guessInputEl.value);
    let output = "";
    guessOutputEl.innerHTML += output + "<br>";
}


