// Closures
function gerarContador(n) {
    let count = 0;

    return function incrementar() {
        return count++
    }
}

const count = gerarContador();

console.log(count());
console.log(count());
console.log(count());
console.log(count());


// Função que cria funções de calcular impostos
function createTax(tax) {
    
    return function (value) {
        return tax * value;
    };
}

const taxIPTU = createTax(0.14)
const taxICMS = createTax(0.21)
const taxIPVA = createTax(0.14)

createTax(2000, 0.1) // 200