// Alternativa D

const readline = require("readline-sync")

function isCousin(num) {
    if (num < 2) {
        return false;
    } 
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}


const n = readline.questionInt("Quantos números você quer inserir? ");

let somaPrimos = 0;

for (let i = 0; i < n; i++) {
    const num = readline.questionInt(`Digite o ${i + 1}º número: `);
    if (isCousin(num)) {
        somaPrimos += num;
    }
}

console.log(`A soma dos números primos é: ${somaPrimos}`);
