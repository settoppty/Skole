//const selectCategoryEl = document.querySelector("#sort");
//selectCategoryEl.addEventListener("change", showList)



function showList(){
    console.log("Er i Show List.");
    
}

let list = 
[
    {id: "1", name: "DS", creator:"LowRoar", genre:"aGze" }
];

showList();
function showList(){
    containerEl.innerhtml = " ";

    for (let i = 0; i < list.length; i++) {
        // Henter objekter
        let o = list[i];

        // For hver sang i list, lag en div og fyll den med info
        let divEl = document.createElement("div");
        divEl.className = "sang space";

        let idEl = document.createElement("div");
        idEl.innerHTML = o.id;
        idEl.className = "id";

        let nameEl = document.createElement("div");
        nameEl.innerHTML = o.name
        nameEl.className = "name";
        
        let creatorEl = document.createElement("div");
        creatorEl.innerHTML = o.creator
        creatorEl.className = "creator";

        let genreEl = document.createElement("div");
        genreEl.innerHTML = o.genre
        genreEl.className = "genre";


        divEl.appendChild(idEl);
        divEl.appendChild(nameEl);
        divEl.appendChild(creatorEl);
        divEl.appendChild(genreEl);

        containerEl.appendChild(divEl);
    }
}

// Inputs:
const inputNameEl = document.querySelector("#inputName");
const inputcreatorEl = document.querySelector("#inputArtist");
const inputgenreEl = document.querySelector("#inputGenre");
// Containers:
const containerEl = document.querySelector(".container");
// Buttons:
const addToListEl = document.querySelector("#add")
const sortByNameEl = document.querySelector("#sortName");
const sortByPriceEl = document.querySelector("#sortArtist");
const sortByCategoryEl = document.querySelector("#sortCategory");

function addToList(){
    let addName = inputNameEl.value;
    let addPrice = Number(inputPriceEl.value);
    let addCategory = inputCategoryEl.value;

    // 1. Lag et objekt med variablene over.
    let newListObject = {
         name: addName, price: addPrice, category: addCategory};
    // 2. Legg til objektet i listen
    list.push(newListObject);
    // 3. Vis Arrayet på nytt.
    showList();
}
addToListEl.addEventListener("click", addToList);