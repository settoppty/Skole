
// for(let m = 2; m < 100; m++ ){            // m
//     for(let n = 2; n<m ;){        // n
//         if( m%m-1 !== 0){
//             console.log(m," is not a prime number")
//         }
//     }
// }



let primes = []; // Array


for(let m = 2; m <= 10000; m++ ){     
    let isPrime = true; 

    for(let n = 2; n<m ; n++){      
        if( m%n == 0){
            isPrime = false;
        }
    }
    if (isPrime){
    console.log(m + " is prime");
    primes.push(m);
}
}

console.log(primes[499]);