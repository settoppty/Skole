let team = [
    { id: 1, name: "Pikachu", type: "Electric", level: 25, attack: 40 , health: 60},
    { id: 2, name: "Charmander", type: "Fire", level: 20, attack: 35 , health: 55},
    { id: 3, name: "Squirtle", type: "Water", level: 22, attack: 38 , health: 58},
    { id: 4, name: "Bulbasaur", type: "Grass", level: 18, attack: 32 , health: 52},
];

function displayTeam(pokemonArray) {
    console.log("---Display Team ---");

    pokemonArray.forEach(pokemon => {

        let logMessage = "ID: " + pokemon.id +
                        " | Navn: " + pokemon.name +
                        " | Type: " + pokemon.type +
                        " | Nivå " + pokemon.level +
                        " | Angrep: " + pokemon.attack;
                        console.log(logMessage)

    });
}

function addNewTeamMember(newId, newName, newType, newLevel, newAttack, newHealth) {
    // lag et nytt objekt
    let newMember = {
        id: newId, name: newName, type: newType, level: newLevel, attack: newAttack, health: newHealth
    };
    // legg det nye objektet i arrayet
    team.push(newMember);
    displayTeam(team);
}

addNewTeamMember(5, "Eevee", "Normal", 15, 30, 50);
displayTeam(team);





team.forEach(pokemon => {
    pokemon.level = 1;
})

team.forEach(pokemon => {
    pokemon.attack = Math.floor(Math.random()*11 + 5) 
})

team.forEach(pokemon => {
    pokemon.health = Math.floor(Math.random()*21 + 20) 
})
displayTeam(team);



// LEKSERR

let informasjonsteknologi1 = {
    spraak: ["HTML", "CSS"],
    likerFaget: false,
    timetall: 5,
    klasserom: "C14",
    antallElever: 24
};

// a
informasjonsteknologi1.spraak.push("JS");

// b
informasjonsteknologi1.antallElever = 1;

// c
informasjonsteknologi1.likerFaget = true;

// d
delete informasjonsteknologi1.timetall;

// e
// for (let informasjonsteknologi1 of informasjonsteknologi1){
// console.log(informasjonsteknologi1[i].spraak);
// }  HVA ER DETTE ?
console.log(informasjonsteknologi1.spraak)

// f
for (let egenskap in informasjonsteknologi1){
    console.log(egenskap)
}
// g
for (let egenskap in informasjonsteknologi1){
    console.log(informasjonsteknologi1[egenskap]);
}

// OPPGAVE 2

// a
let filmer = [
    { tittel: "Jakten", regissor: "Thomas Vinterberg", sett: true},
    { tittel: "Lilja-4-Ever", regissor: "Lukas Moodysson", sett: true},
    { titel: "Nummer 24", regissor: "John Andreas Andersen", sett: true },
    { tittel: "Sex", regissor: "Dag Johan Haugerud", sett: true},
    {tittel: "Dune", regissor: "Denis Villeneuve", sett: true},
    { tittel: "Sinners", regissor: "Ryan Coogler", sett: false},
    { tittel: "Pulp Fiction", regissor: "Quentin Tarantino", sett: false},
    { tittel: "Kill Bill", regissor: "Quentin Tarantino", sett: false},
    { tittel:"Pusher", regissor: "Nicolas Winding Refn", sett: false},
    { tittel: "La Haine", regissor: "Mathieu Kassovitz", sett: false},
];

filmer.forEach(film => {
    console.log(film.tittel + film.regissor)
})