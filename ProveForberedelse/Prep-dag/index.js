const speakInputEl = document.querySelector("#wutUsay");
const speakButtonEl = document.querySelector("#spoken");
const speakOutputEl = document.querySelector("#wutEsay");

let frukt = ["kiwi", "eple", "drue", "banan"];
let nums = [
  { id: 3, name: "tre" },
  { id: 1, name: "en" },
  { id: 13, name: "tretten" },
  { id: -5, name: "minus fem" },
];

console.log(frukt.sort());
speakButtonEl.addEventListener("click", speak);
function speak() {
  speakOutputEl.innerText = speakInputEl.value;
  console.log("clocked");
  frukt.splice(2, 0, speakInputEl.value);
  console.log(frukt.sort());
  console.log(
    nums.sort(function (a, b) {
      return a.id - b.id;
    }),
  );
}

// bare hent sort fra listify du

let tall = 2.71;

// i = 1;
// while(i <= 50) {
//     console.log(i);
//     i++;
// }

// for(let i = 1; i <= 50; i++) {
//     console.log(i)
// }

for (let i = 0; i <= 999; i += 3) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log(sum);

let tekst = "#";
let text = "#";
for (let i = 1; i <= 4; i++) {
  console.log(tekst);
  tekst += text;
}

// riktig måte

let pattern = "";
for (let i = 1; i <= 4; i++) {
  pattern += "#";
  console.log(pattern);
}

for (let i = -20; i <= 20; i++) {
  if (i != -13 && i != 13) {
    console.log(i);
  }
}

let sitat = "you are gay";

let antall = 0;
for (i = 0; i <= sitat.length; i++) {
  if (sitat[i] === "y") {
    antall++;
  }
}
console.log(antall);
