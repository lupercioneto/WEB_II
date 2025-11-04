document.getElementById("formLanHouse").addEventListener("submit", function(e) {
    e.preventDefault();

    const valor = parseFloat(document.getElementById("valor").value);
    const tempo = parseInt(document.getElementById("tempo").value);
    const res = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0 || isNaN(tempo) || tempo <= 0) {
        res.textContent = "Preencha os campos corretamente!";
        res.className = "erro";
        return;
    }

    const intervalos = Math.ceil(tempo / 15);
    const total = intervalos * valor;

    res.textContent = `Tempo: ${tempo} minutos → Total a pagar: R$ ${total.toFixed(2).replace('.', ',')}`;
    res.className = "sucesso";
});