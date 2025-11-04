const precos = {
    "Arroz": 22.50,
    "Feijão": 8.90,
    "Macarrão": 5.40,
    "Leite": 4.75,
    "Café": 17.80
};

const selProduto = document.getElementById("produto");
const inputPreco = document.getElementById("preco");
const resultado = document.getElementById("resultado");

// Atualiza o preço ao selecionar um produto
selProduto.addEventListener("change", () => {
    const produto = selProduto.value;
    
    if (produto && precos[produto]) {
        inputPreco.value = precos[produto].toFixed(2).replace('.', ',');
        resultado.textContent = "";
    } else {
        inputPreco.value = "";
    }
});

// Calcula a promoção quando envia o form
document.getElementById("formSupermercado").addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = selProduto.value;
    
    if (!produto) {
        resultado.textContent = "Por favor, selecione um produto!";
        resultado.className = "erro";
        return;
    }

    const preco = precos[produto];
    const total = (2 * preco) + (preco / 2);

    resultado.innerHTML = `
        Promoção de ${produto}: leve 3 e pague 2 por R$ ${(2 * preco).toFixed(2).replace('.', ',')} 
        + 1 por R$ ${(preco / 2).toFixed(2).replace('.', ',')}<br>
        <strong>Total: R$ ${total.toFixed(2).replace('.', ',')}</strong>
    `;
    resultado.className = "sucesso";
});