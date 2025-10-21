// Alternativa C

const readline = require("readline-sync")

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
