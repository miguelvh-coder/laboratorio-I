
while (i < cantidad){

    if(esPrimo(primoTemp))

    primoTemp++
}

const esPrimo = primo => {

let cantDivisores=0;

    for(let i=1;i <= primo; i++){
        if(primo % i ==0){
            cantDivisores++
        }
    }

    if(cantDivisores==2){
        return true
    }

    return false
}


const cantidad = 15

let i = 0 
let primoTemp = 1



while (i < cantidad){

    if(esPrimo(primoTemp) && i > -1){
        console.log(i+1,"->",primoTemp)
        i++
    }
    primoTemp++
}
