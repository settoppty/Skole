
let PikaHealth = 35
let CharmanderHealth = 39

let PikaLife = true
let CharmLife = true


function pikachumove(){
    if (CharmLife = false)
        return console.log("Charmander has Perished.");
        let angrep = Math.floor(Math.random() * 4);

        if (angrep === 0){
            console.log("Pikachu used Static");
            CharmanderHealth = CharmanderHealth - 10
            console.log("Charmander now has " + CharmanderHealth + " hitpoints left.");
            if (CharmanderHealth < 1)
            console.log("Charmander has perished. Pikachu wins.");
             if (CharmanderHealth < 1)
                 console.log("Charmander has perished. Pikachu wins.");
                CharmLife = false
             if (CharmanderHealth < -15)
                 console.log("Okay, that's enough.")
    }
    else if (angrep === 1){
        console.log("Pikachu used Shock");
        let ShockDmg = Math.ceil(Math.random()* 15) + 5;
        CharmanderHealth = CharmanderHealth - ShockDmg
        console.log("Charmander now has " + ShockDmg + " hitpoints left.")
             if (CharmanderHealth < 1)
                 console.log("Charmander has perished. Pikachu wins.");
                CharmLife = false
             if (CharmanderHealth < -15)
                 console.log("Okay, that's enough.")
    }
    else if (angrep === 2){
        console.log("Pikachu danced");
        console.log("The dance did nothing")
        console.log("Charmander has " + CharmanderHealth + " hitpoints left.")
                    if (CharmanderHealth < 1)
            console.log("Charmander has perished. Pikachu wins.");
             if (CharmanderHealth < 1)
                 console.log("Charmander has perished. Pikachu wins.");
                CharmLife = false
             if (CharmanderHealth < -15)
                 console.log("Okay, that's enough.")
    }
        else if (angrep === 3){
        console.log("Pikachu used Slap");
           CharmanderHealth = CharmanderHealth - 5
            console.log("Charmander now has " + CharmanderHealth + " hitpoints left.");
                        if (CharmanderHealth < 1)
            console.log("Charmander has perished. Pikachu wins.");
             if (CharmanderHealth < 1)
                 console.log("Charmander has perished. Pikachu wins.");
                CharmLife = false
             if (CharmanderHealth < -15)
                 console.log("Okay, that's enough.")
    }
}

function charmandermove(){
        let angrep = Math.floor(Math.random() * 4);

        if (angrep === 0){
            console.log("Charmander used Flame");
            PikaHealth = PikaHealth - 10
            console.log("Pikachu now has " + PikaHealth + " hitpoints left.");
            if (PikaHealth < 1)
            console.log("Pikachu has perished. Charmander wins.");
             if (CharmanderHealth < 1)
                 console.log("Charmander has perished. Pikachu wins.");
             if (PikaHealth < -16)
                 console.log("Okay, that's enough.")
    }
    else if (angrep === 1){
        console.log("Charmander used Burn");
        let BurnDmg = Math.ceil(Math.random()* 16) + 7;
        PikaHealth = PikaHealth - BurnDmg
        console.log("Pikachu now has " + PikaHealth + " hitpoints left.");
        if (PikaHealth < 1)
            console.log("Pikachu has perished. Charmander wins.");
             if (PikaHealth < -16)
                 console.log("Okay, that's enough.")
    }
    else if (angrep === 2){
        console.log("Charmander coughed");
        console.log("The cough did nothing")
        console.log("Pikachu has " + PikaHealth + " hitpoints left.")
        if (PikaHealth < 1)
            console.log("Pikachu has perished. Charmander wins.")
             if (PikaHealth < -16)
                 console.log("Okay, that's enough.")
    }
        else if (angrep === 3){
        console.log("Charmander used Slap");
           PikaHealth = PikaHealth - 5
            console.log("Pikachu now has " + PikaHealth + " hitpoints left.");
            if (PikaHealth < 1)
            console.log("Pikachu has perished. Charmander wins.");
             if (PikaHealth < -16)
                 console.log("Okay, that's enough.")
    }
}
