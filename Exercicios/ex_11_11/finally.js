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

const nums = [1,5,8,9,34,67]

const somatoria = (nums) => nums.reduce((acc, n) => n + acc, 0)

// Padrão de Composição de PIPE
// A saída de uma função serve como entrada para outra
// Usamos para criar um pipeline de execuções

const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados);

const execute = pipe(
    somatoria,
    console.log
);

execute(nums);

