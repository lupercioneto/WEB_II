// Composition (Pipe)


const produtos = [
    { nome: "Mouse Gamer RGB", preco: 149.90, quantidade: 25, categoria: "Periféricos" },
    { nome: "Teclado Mecânico", preco: 299.90, quantidade: 15, categoria: "Periféricos" },
    { nome: "Monitor 27'' 144Hz", preco: 1899.00, quantidade: 8, categoria: "Periféricos" },
    { nome: "Headset Bluetooth", preco: 259.90, quantidade: 30, categoria: "Áudio" },
    { nome: "Cadeira Gamer", preco: 899.00, quantidade: 12, categoria: "Móveis" },
    { nome: "SSD NVMe 1TB", preco: 499.00, quantidade: 40, categoria: "Armazenamento" },
    { nome: "Placa de Vídeo RTX 4070", preco: 4799.00, quantidade: 5, categoria: "Hardware" },
    { nome: "Notebook Core i7 16GB RAM", preco: 5799.00, quantidade: 6, categoria: "Hardware" },
    { nome: "Webcam Full HD", preco: 199.90, quantidade: 20, categoria: "Acessórios" },
    { nome: "Controle Xbox Series", preco: 449.00, quantidade: 18, categoria: "Periféricos" }
];

const totalValue = produtos.filter(p => p.categoria === "Periféricos")
                    .map(p => {
                        const newP = {...p};
                        newP.preco = newP.preco * (1 - 0.1)
                        return newP
                    })
                    .reduce((acc, p) => acc + (p.preco * p.quantidade), 0);

console.log(`Valor total é: R$${totalValue.toFixed(2).replace(".", ",")}`)