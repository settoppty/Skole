// ==========================================
// POKÉDEX – JavaScript
// ==========================================
const antallpokemonEl = document.querySelector("#antall-pokemon");
const spennEl = document.querySelector("#spenn");
const pokelistEl = document.querySelector("#pokemon-liste");

// --- Data ---

let pokemon = [
  { navn: "Pikachu", type: "Electric", level: 35 },
  { navn: "Charizard", type: "Fire", level: 50 },
  { navn: "Bulbasaur", type: "Grass", level: 12 },
  { navn: "Gengar", type: "Ghost", level: 44 },
  { navn: "Eevee", type: "Normal", level: 20 },
  { navn: "Snorlax", type: "Normal", level: 38 },
];

// --- Tilstand ---

let aktivKolonne = null;
let sorteringsRetning = "stigende";

// ==========================================
// #region Oppgave 4 – Legg til ett pokémon
// Kan gjerne gjøres ved hardkoding, bruk array-funksjoner for å legge det til her:
// ==========================================
pokemon.push({ navn: "Haunter", type: "Ghost", level: 67 });
console.log(pokemon);

// #endregion

// Benjamin redder verden med localStorage
if (localStorage.pokemon) {
  pokemon = JSON.parse(localStorage.pokemon);
} else {
  localStorage.pokemon = JSON.stringify(pokemon);
}

// ==========================================
// #region Oppgave 5 – Vis statistikk
// Husk at det skal funke med alle array som pokemon-arrayet over, uavhengig av innholdet
// (gitt at det følger samme stilen)
// ==========================================

antallpokemonEl.textContent = pokemon.length;

let levels = [];
for (let i = 1; i < pokemon.length; i++) {
  levels.push(pokemon[i].level);
}
console.log(levels);

spenn.innerHTML = finnSpenn(levels);

// #endregion

// ==========================================
// #region Oppgave 6 – Skriv funksjonen finnSpenn(tall)
// Husk at denne skal returnere spennet i et array med tall, dvs høyeste verdi - minste verdi
// ==========================================

function finnSpenn(tall) {
  let minVerdi = Math.min(...tall);
  let maxVerdi = Math.max(...tall);
  let diff = maxVerdi - minVerdi;
  // Løsning taxet av Nima Darabi og Benjamin Nersund
  return diff;
}

// #endregion

// ==========================================
// #region Oppgave 7 – Vis pokémon på siden
// ==========================================

function visPokemon() {
  pokelistEl.innerHTML = "";

  // ForEach inspirert av Emre, ellers hadde brukt for(let i = 0 osv)
  pokemon.forEach((item) => {
    let divEl = document.createElement("div");
    divEl.classname = "pokemon-kort";

    let h3El = document.createElement("h3");
    h3El.textContent = item.navn;

    let typeEl = document.createElement("span");
    typeEl.textContent = item.type;

    if (typeEl.textContent == "Electric") {
      divEl.style.backgroundColor = "yellow";
    }
    if (typeEl.textContent == "Fire") {
      divEl.style.backgroundColor = "red";
    }

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.className = "btn delete";
    deleteBtn.navn = item.navn; // Bruker id'en til å identifisere hvilken knapp det trykkes på!
    deleteBtn.addEventListener("click", removeFromList); // Viktig å gjøre at knappen vi lagde faktisk kaller funksjonen.

    let imgEl = document.createElement("img");
    imgEl.src = "superball.png";

    divEl.appendChild(h3El);
    divEl.appendChild(typeEl);
    divEl.appendChild(imgEl);
    divEl.appendChild(deleteBtn);

    pokelistEl.appendChild(divEl);
  });
}

visPokemon();

// #endregion

// ==========================================
// #region Oppgave 8 – Sortering
// ==========================================

const sortNavn = document.querySelector("#sorter-navn");
const sortType = document.querySelector("#sorter-type");
const sortLevel = document.querySelector("#sorter-level");

sortNavn.addEventListener("click", sortByName);
sortType.addEventListener("click", sortByType);
sortLevel.addEventListener("click", sortByLevel);

let nameClick = 0;
function sortByName() {
  nameClick++;
  if (nameClick % 2 == 0) {
    pokemon.sort(compareName);
    visPokemon();
  } else {
    pokemon.sort(reverseCompareName);
    visPokemon();
  }
}

let typeClick = 0;
function sortByType() {
  typeClick++;
  if (typeClick % 2 == 0) {
    pokemon.sort(compareType);
    visPokemon();
  } else {
    pokemon.sort(reverseCompareType);
    visPokemon();
  }
}

let levelClick = 0;
function sortByLevel() {
  levelClick++;
  if (levelClick % 2 == 0) {
    pokemon.sort(compareLevel);
    visPokemon();
  } else {
    pokemon.sort(reverseCompareLevel);
    visPokemon();
  }
}
function compareName(a, b) {
  console.log("compared");
  if (a.navn > b.navn) {
    return 1;
  } else if (a.navn < b.navn) {
    return -1;
  } else {
    return 0;
  }
}

function reverseCompareName(a, b) {
  console.log("compared");
  if (a.navn < b.navn) {
    return 1;
  } else if (a.navn > b.navn) {
    return -1;
  } else {
    return 0;
  }
}

function compareType(a, b) {
  console.log("compared");
  if (a.type > b.type) {
    return 1;
  } else if (a.type < b.type) {
    return -1;
  } else {
    return 0;
  }
}

function reverseCompareType(a, b) {
  console.log("compared");
  if (a.type < b.type) {
    return 1;
  } else if (a.type > b.type) {
    return -1;
  } else {
    return 0;
  }
}

function compareLevel(a, b) {
  console.log("compared");
  if (a.level > b.level) {
    return 1;
  } else if (a.level < b.level) {
    return -1;
  } else {
    return 0;
  }
}

function reverseCompareLevel(a, b) {
  console.log("compared");
  if (a.level < b.level) {
    return 1;
  } else if (a.level > b.level) {
    return -1;
  } else {
    return 0;
  }
}

// #endregion

// ==========================================
// #region Oppgave 9 – Legg til pokémon via skjema
// ==========================================
const inputNameEl = document.querySelector("#input-navn");
const inputTypeEl = document.querySelector("#input-type");
const inputLevelEl = document.querySelector("#input-level");
const addToListEl = document.querySelector("#legg-til");

function addToList() {
  let addName = inputNameEl.value;
  let addType = inputTypeEl.value;
  let addLevel = inputLevelEl.value;
  // 1. Lag et objekt med variablene over.
  let newListObject = {
    navn: addName,
    type: addType,
    level: addLevel,
  };
  // 2. Legg til objektet i listen
  pokemon.push(newListObject);
  // 3. Vis Arrayet på nytt.
  localStorage.info = JSON.stringify(pokemon);

  antallpokemonEl.textContent = pokemon.length;

  let levels = [];
  for (let i = 1; i < pokemon.length; i++) {
    levels.push(pokemon[i].level);
  }
  console.log(levels);

  spenn.innerHTML = finnSpenn(levels);

  visPokemon();
  lagrePokemon();

  inputNameEl.value = "";
  inputTypeEl.value = "";
  inputLevelEl.value = "";
}
addToListEl.addEventListener("click", addToList);
// #endregion

// ==========================================
// #region Oppgave 10 – Bakgrunnsfarge basert på type
// Her må du nok endre på koden i oppgave 7.
// ==========================================

//  La til if funskjoner på showlistttttttttttttttttttttttttttttttttttt

// #endregion

// ==========================================
// #region Oppgave 11 – Slett pokémon
// Her må du også muligens endre koden i oppgave 7
// ==========================================

function removeFromList(e) {
  let index = e.target.id;
  pokemon.splice(index, 1);
  localStorage.info = JSON.stringify(pokemon);
  visPokemon();
  lagrePokemon();

  antallpokemonEl.textContent = pokemon.length;

  let levels = [];
  for (let i = 1; i < pokemon.length; i++) {
    levels.push(pokemon[i].level);
  }
  console.log(levels);

  spenn.innerHTML = finnSpenn(levels);
}

// #endregion

// ==========================================
// #region Oppgave 12 – Lagre i localStorage
// ==========================================

function lagrePokemon() {
  localStorage.pokemon = JSON.stringify(pokemon);
}

// #endregion

// ==========================================
// Start – vis pokémon når siden lastes
// ==========================================
visPokemon(pokemon);
