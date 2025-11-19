

//#region Task 1
// I denne oppgaven skal du endre linje 25+

// Fiks funksjonen under slik at den sjekker om du er en tenåring, den skal ha følgende oppførsel:
// 1. er du mindre enn 13 skal den si at du snart blir en tenåring (se om du kan få den til å si hvor mange år det er igjen!)
// 2. er du mellom 13 og 19 skal den skrive at du er en tenåring
// 3. er du 20 eller over skal den skrive at du er voksen.
// Teksten du vil at skal vises frem lagrer du i output variablen.

// Henter elementene fra HTML fila
const ageInputEl = document.getElementById("inputAge");
const ageButtonEl = document.getElementById("buttonAge");
const ageOutputEl = document.getElementById("outputAge");

// Legger til en event når man trykker på knappen:
ageButtonEl.addEventListener("click", CheckAge);

// Lager funksjonen som kjøres av ageButtonEl
function CheckAge(){
    age = Number(ageInputEl.value);
    output = "";
    let rest = age
    // IF-STATEMENTS HER:
    if(age < 13){
        rest = 13 - rest
        output = "Du er yn, det er " +rest+ " år til du blir tenåring";
    }
    
    if(age > 13 && age < 19){
        output = "Du er tenåring!";
    }
    if(age>19){
        output = "Du er velvokst";
    }



    // Legger til vår output tekst i slutten av p-elementet vårt.
    ageOutputEl.innerHTML += output + "<br>";
}
//#endregion

//#region Task 2

// I denne oppgaven skal du gjøre to ting, du skal endre linje 41 slik at den velger et tilfeldig tall
// Og du skal endre linje 56+ til å inkludere de nødvendige if-statementene.

// Endre koden under slik at secretNumber blir et tilfeldig tall mellom 0 og 100.
let secretNumber = Math.ceil(Math.random() * 100);

// Henter elementene fra HTML fila
const guessInputEl = document.getElementById("inputGuess");
const guessButtonEl = document.getElementById("buttonGuess");
const guessOutputEl = document.getElementById("outputGuess");

// Legger til en event når man trykker på knappen:
guessButtonEl.addEventListener("click", guessNumber);

// Lager funksjonen som kjøres av guessButtonEl
function guessNumber(){
    let guess = Number(guessInputEl.value);
    let output = "";

    // IF-STATEMENTS HER:
    if(guess > secretNumber){
        output = "Ro ned";
    }
    if(guess < secretNumber){
        output = "Ok gi litt gass a";
    }
    if(guess == secretNumber){
        output = "Digg";}
    
    

    // Legger til vår output tekst i slutten av p-elementet vårt.
    guessOutputEl.innerHTML += output + "<br>";
}

//#endregion


