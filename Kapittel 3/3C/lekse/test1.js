// oppg 1
u = 1
while(u<=50){
    console.log(u);
    u++;
}

// oppg 2

for(let o = 1; o<=50; o++){
    console.log(o)
}

// oppg 3
for(let n = 0; n<=999; n += 3){
console.log(n);
}

// oppg 4
for(let p = 2; p<=100; p+=2){
    console.log(p)
}

// oppg 5
let sum = 0
for(let t=0; t<=100; t++){
    sum+=t
}
console.log(sum)

// oppg 6
h = "#"
for(let a="#"; a<="####";){
    console.log(a)
    a+=h
}



// oppgave 5 for løkker


// a DENNE ER VIKTIG JØRN ELSKER DENNE PÅ MUNTLIG
for(let i = 1; i<=10; i++){
    for(let j=1; j<=10; j++)
        console.log(i + "*" + j + " = " + i*j)
}








for(let m = 2; m < 100; m++ ){            // m
    for(let n = 2; n<m ;){        // n
        if( m%n !== 0){
            console.log(m," is a prime number")
        }
    }
}




