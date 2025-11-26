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

displayTeam(team);

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