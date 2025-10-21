const readline = require("readline-sync")

// Alternativa B

let raio = readline.question("Insira o valor do raio da circunferência: ")

let circunf = 2 * Math.PI * raio 

console.log(`A circunferência do círculo é: ${circunf.toFixed(2)}`)