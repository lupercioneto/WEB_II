const precos = {
    "Aspirina": 12.45,
    "Paracetamol": 8.90,
    "Dipirona": 6.50,
    "Ibuprofeno": 15.30,
    "Loratadina": 11.75
};

const selMedicamento = document.getElementById("medicamento");
const inputPreco = document.getElementById("preco");
const resultado = document.getElementById("resultado");

// Atualiza o preço quando muda o medicamento
selMedicamento.addEventListener("change", () => {
    const medicamento = selMedicamento.value;
    
    if (medicamento && precos[medicamento]) {
        inputPreco.value = precos[medicamento].toFixed(2).replace('.', ',');
        resultado.textContent = "";
    } else {
        inputPreco.value = "";
    }
});

// Calcula a promoção depois de receber o form
document.getElementById("formFarmacia").addEventListener("submit", (e) => {
    e.preventDefault();

    const medicamento = selMedicamento.value;
    
    if (!medicamento) {
        resultado.textContent = "Por favor, selecione um medicamento!";
        resultado.className = "erro";
        return;
    }

    const preco = precos[medicamento];  
    const totalSemDesc = preco * 2;
    const desconto = totalSemDesc - Math.floor(totalSemDesc); // arredondar 
    const totalComDesc = totalSemDesc - desconto;

    resultado.textContent = `Promoção de ${medicamento}: leve 2 por apenas R$ ${totalComDesc.toFixed(2).replace('.', ',')} (desconto de R$ ${desconto.toFixed(2).replace('.', ',')}).`;
    resultado.className = "sucesso";
});