// region elements
const introPage = document.querySelector(".intro");
const glassEl = document.querySelector(".glass");
const milkEl = document.querySelector("#milk");
const quizEl = document.querySelector(".quiz");

// buttons
const introButtons = document.querySelector(".introButtons");
const milkBtn = document.querySelector(".milkbtn");

// endregion

milkBtn.addEventListener("click", fyllGlass);
function fyllGlass() {
  introButtons.classList.add("forsvinn");

  //   Venter med å utføre koden i et bestemt antall ms
  setTimeout(() => {
    milkEl.classList.toggle("fyllOpp");
    console.log("Melker glasset hehe");
  }, 1150);

  setTimeout(() => {
    introPage.classList.add("moveDown");
    console.log("Flytter glasset");

    quizEl.classList.add("enterRight");
    console.log("Drar inn quizen");
  }, 3000);
}
