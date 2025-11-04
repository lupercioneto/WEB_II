// Arrow Functions

// Traditional
function sum(a, b) {
    return a + b;
}

// Function Expression (Anonymous)
// Functions Expressions não são elevadas ao topo do escopo (hoisting)
const somaFE = function (a, b) {
    return a + b;
}

console.log(somaFE(3, 6))


// Arrow Function
const somaArrowUnique = (a, b) => a + b; // Linha única

const dobro = a => a * 2; // Parâmetro único - É possível retirar os parênteses 

const somaArrow = (a, b) => { // Arrow Function padrão
    return a + b
}

// SetTimeOut
setTimeout(() => console.log(Date.now()), 1500);

// setInterval
setInterval(() => console.log("Executando..."), 2500)