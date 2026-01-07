let list;
if(localStorage.info){
  list = JSON.parse(localStorage.info);
}
else{
  // Aldri vært på denne siden før
  list = [
     {id: 1, name: "ChugJugg", creator:"Dinero", genre:"Hip-Hop", date:"2008-12-07"},
     {id: 2, name: "Musik Non Stop", creator: "kent", genre:"Rock", date:"1999-11-15"},
     {id: 3, name: "Subwoofer Lullaby", creator: "C418", genre: "Electronic", date: "2011-03-04"},
         ];
  localStorage.info = JSON.stringify(list);
}


// DISSE MÅ VÆRE OPPE FOR Å DEFINERE CONTAINER SLIK AT SHOWLIST KAN FUNGERE
// Inputs:
const inputNameEl = document.querySelector("#inputName");
const inputCreatorEl = document.querySelector("#inputArtist");
const inputGenreEl = document.querySelector("#inputGenre");
const inputDateEL = document.querySelector("#inputDate");
// Containers:
const containerEl = document.querySelector(".container");
// Buttons:
const addToListEl = document.querySelector("#add");
const sortSelectEl = document.querySelector("#sort");
const genreSelectEl = document.querySelectorAll(".album");

for (let i = 0; i < genreSelectEl.length; i++) {
  let button = genreSelectEl[i].querySelector("button");
  let genre = button.value;
  button.addEventListener("click", function() {
    selectedGenre = genre;
    showList();
  });
}

 let selectedGenre = "all";
 
showList();
function showList(){
    containerEl.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        // Henter objekter
        let o = list[i];
        let genreClass = o.genre.toLowerCase().replace(/[^a-z]/g, ""); // Finn sjangeren og gjør det brukbart i js når den skal legge det til som class
        if (selectedGenre == "all" || o.genre == selectedGenre) {
          // For hver sang i list, lag en div og fyll den med info
          let divEl = document.createElement("div");
          divEl.className = "sang space " + genreClass;

          let idEl = document.createElement("div");
          idEl.innerHTML = o.id;
          idEl.className = "id";

          let nameEl = document.createElement("div");
          nameEl.innerHTML = o.name
          nameEl.className = "name";
          
          let creatorEl = document.createElement("div");
          creatorEl.innerHTML = o.creator
          creatorEl.className = "creator";

          let dateEl = document.createElement("div");
          dateEl.innerHTML = o.date
          dateEl.className = "date";

          let deleteBtn = document.createElement("button");
          deleteBtn.innerHTML = "X";
          deleteBtn.className = "btn delete";
          deleteBtn.id = i;   // Bruker id'en til å identifisere hvilken knapp det trykkes på!
          deleteBtn.addEventListener("click", removeFromList);   // Viktig å gjøre at knappen vi lagde faktisk kaller funksjonen.



          divEl.appendChild(idEl);
          divEl.appendChild(nameEl);
          divEl.appendChild(creatorEl);
          divEl.appendChild(dateEl);
          divEl.appendChild(deleteBtn);

        containerEl.appendChild(divEl);
        }
    }
}


function addToList(){
    let addName = inputNameEl.value;
    let addCreator = inputCreatorEl.value;
    let addGenre = inputGenreEl.value;
    let addDate = inputDateEL.value;

    // 1. Lag et objekt med variablene over.
    let newListObject = {
         id: list.length + 1, name: addName, creator: addCreator, genre: addGenre, date: addDate};
    // 2. Legg til objektet i listen
    list.push(newListObject);
    // 3. Vis Arrayet på nytt.
    localStorage.info = JSON.stringify(list);
    showList();
}
addToListEl.addEventListener("click", addToList);


// SortByName
sortSelectEl.addEventListener("change", sortCheck)
function sortCheck(event){
    // EVENT er en variabel som blir sendt med alle eventListeners
    // De inneholder masse info inkl. hva som skjedde på event.target
    // event.target gir html-elementet som ble endret. Select/Input elementer har noe som heter value
    let sortType = event.target.value;

    if (sortType == "id"){
        list.sort(compareID);
    }
    else if (sortType == "a-z"){
        list.sort(compareName);
    }
    else if (sortType == "artist"){
        list.sort(compareArtist);
        console.log("Sorter på artist:", list);
    }
    else if (sortType == "date"){
      list.sort(compareDate);
    }
    else{
        console.error("Can't sort by " + sortType);
    }
    
    showList()

    // Bare for å se
    console.log("------------EVENT-----------");
    console.log(event)
    console.log("---------FERDIG-------------");
}
function compareName(a,b){
      if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}

function compareID(a,b){
    return a.id - b.id;
}
function compareArtist(a,b){
          if (a.creator > b.creator) {
    return 1;
  } else if (a.creator < b.creator) {
    return -1;
  } else {
    return 0;
  }
}
function compareDate(a,b){
    if (a.date > b.date) {
    return 1;
  } else if (a.date < b.date) {
    return -1;
  } else {
    return 0;
  }
};
// RemoveFromList
function removeFromList(e){
    let index = e.target.id;
    list.splice(index, 1);
    localStorage.info = JSON.stringify(list);
    showList()
    


}
  showList()






