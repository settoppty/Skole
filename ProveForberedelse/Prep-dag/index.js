const speakInputEl = document.querySelector("#wutUsay");
const speakButtonEl = document.querySelector("#spoken");
const speakOutputEl = document.querySelector("#wutEsay");



speakButtonEl.addEventListener("click", speak)
function speak() {
    speakOutputEl.innerText = speakInputEl.value
    console.log("clocked")

}