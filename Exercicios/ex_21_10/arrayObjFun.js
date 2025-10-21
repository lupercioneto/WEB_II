// Aula com Arrays, Objetos e funções 

const carrinho = [
    {
        id: 363, 
        name: "Notebook Lenovo", 
        price: 3000,
        qtd: 1

    },
    {
        id: 412, 
        name: "SSD Sata 8gb ", 
        price: 120,
        qtd: 2

    },
    {
        id: 123, 
        name: "Air Cooler", 
        price: 90,
        qtd: 1
    },
    {
        id: 363, 
        name: "Mouse HyperX Pulsefire Core", 
        price: 160,
        qtd: 1

    },
    {
        id: 974, 
        name: "Mousepad", 
        price: 40,
        qtd: 1
    }
]

function calcPrice(carrinho) {
    let total = carrinho.reduce(function(accum, now) {
        return accum + (now.qtd * now.price)
    }, 0);

    return total
}
    

console.log(`Valor total: R$${calcPrice(carrinho)}`)