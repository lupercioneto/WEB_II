const readline = require("readline-sync")

// Alternativa A

let cotacaoDolar = 5.41
let valorBrl = readline.questionFloat("Digite um valor em Reais (R$/BRL): ")

let valorConvertido = valorBrl * cotacaoDolar

console.log(`Valor convertido para US$: $US ${valorConvertido.toFixed(2)}`)

// Alternativa B

let raio = readline.question("Insira o valor do raio da circunferência: ")

let circunf = 2 * Math.PI * raio 

console.log(`A circunferência do círculo é: ${circunf.toFixed(2)}`)

// Alternativa C

let notasN1 = [] 
let notasN2 = []

for (let index = 0; index < 3; index++) { 
    nota = readline.questionFloat(`Digite a ${index + 1}ª nota da N1: `)
    notasN1.push(nota)

}

console.log()

for (let index = 0; index < 3; index++) {
    nota = readline.questionFloat(`Digite a ${index + 1}ª nota da N2: `)
    notasN2.push(nota)
}

const median1 = (notasN1.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / notasN1.length) * 2
const median2 = (notasN2.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) / notasN2.length ) * 3

let mediaFinal = (median1 + median2) / 5

if (mediaFinal >= 7) {
   console.log(`Você foi aprovado! Sua nota foi ${mediaFinal.toFixed(2)}`) 
} else {
    console.log(`Você foi reprovado! Sua nota foi ${mediaFinal.toFixed(2)}`)
}


// Alternativa D

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
