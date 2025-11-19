let watercount = 0
let firecount = 0
let grasstype = 0

function getPokemonType(){
    for(id=0; id<=10; id++){
        type =  Math.ceil(Math.random() * 3)
        if (type === 1){
            console.log("Pokemon ID " + id + " is a water type")
            watercount = watercount + 1;
        }
        if (type === 2){
            console.log("Pokemon ID " + id + " is a fire type")
            firecount = firecount + 1;
        }
        if (type === 3){
            console.log("Pokemon ID " + id + " is a grass type")
            grasstype = grasstype + 1
        }
    }
    console.log("There are " + watercount + " water pokemon");
    console.log("There are " + firecount + " fire pokemon");
    console.log("There are " + grasstype + " grass pokemon");
}