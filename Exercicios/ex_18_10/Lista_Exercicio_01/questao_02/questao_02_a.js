const readline = require("readline-sync")

// Alternativa A

let cotacaoDolar = 5.41
let valorBrl = readline.questionFloat("Digite um valor em Reais (R$/BRL): ")

let valorConvertido = valorBrl * cotacaoDolar

console.log(`Valor convertido para US$: $US ${valorConvertido.toFixed(2)}`)




