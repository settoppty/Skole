function nickName(){
    // legg til masse adj og subst
    firstPart = ["Testy", "DIIH", "stein", "grus", "sand",];
    randomIndex1 = Math.floor(Math.random()*firstPart.length);
    lastPart * ["McTesterson", "owner", "stein"];
    randomIndex2 = Math.floor(Math.random()*lastPart.length);

    return firstPart[randomIndex1] + " " + lastPart[randomIndex2];

}

let person = [
    {
    fornavn: "Ola",
    etternavn: "Hansen",
    kallenavn: nickName()
    },
    {
    fornavn: "k",
    etternavn: "neck",
    kallenavn: nickName()
    },
    {
    fornavn: "dih",
    etternavn: "Harden",
    kallenavn: nickName()
    },

]

for(let i = 0; i<person.length; i++){
    let name = person[i].fornavn + " " + person[i].etternavn + " aka " + person[i].kallenavn;
    console.log(name);
}