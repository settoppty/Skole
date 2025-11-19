
function terning() {
  return Math.floor(Math.random() * 6) + 1;
}

13

function toLike(){
    let toSomErLike = false;    // settes til true når vi får to like
let antallForsok = 0;  // lar oss telle antall forsøk

// Så lenge vi ikke har fått to like
while(!toSomErLike) {  
  // Øker antall forsøk med 1
  antallForsok++;

  // triller to terninger
  let terning1 = terning();
  let terning2 = terning();

  console.log("Fikk " + terning1 + ", " + terning2);

  // Undersøker om de to terningene er like
  if (terning1 === terning2) {
    toSomErLike = true;
    console.log("Fikk to like på " + antallForsok + " forsøk");
  }
}
}


14

function syvellersame(){

  let terning1 = terning();
  let terning2 = terning();

  if (terning1 === terning2){
    console.log("Du har fått et par med " + terning1 + "ere!");
  }
  else if(terning1 + terning2 === 7){
    console.log ("Tallene dine summerer 7. Du har " + terning1 + " og " + terning2);
  }
  else{
    console.log("Du er urelevant")
  }
}

15
function trening() {
  return Math.ceil(Math.random() * 3);
}

function treLike(){
  treSomErLike = false

  while(!treLike) {
    let trening1 = trening();
    let trening2 = trening();
    let trening3 = trening();

    console.log("Du har kastet " + trening1 + ", " + trening2 + " og " + trening3);
    if(trening1 == trening2 && trening1 == trening3){
      console.log("Det var tre like!")
      treSomErLike = true
    }
  }
}


17
//  For å lage en lokal variabel må du definere variabelen inni en funksjon. Den fungerer kun inni funksjonen.
18
//  En global variabel lages utenfor funksjonen og kan brukes overalt i koden. Lokal lages i funksjonen og kan kun brukes inni. Hvis en lokal variabel har samme navn som en global blir den lokale dominerende, men kun i funksjonen.

// array
let sifrene = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function siffe(){
console.log(sifrene[2])
}