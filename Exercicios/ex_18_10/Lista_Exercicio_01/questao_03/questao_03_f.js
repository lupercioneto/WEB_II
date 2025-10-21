// Alternativa F

const contaBancaria = {
    saldo: 1000,
    accountNum: "12345",
    deposit: function(depCash) {
        this.saldo += depCash
        
    },

    sacar: function(debtCash) {
        if (debtCash > this.saldo) {
            throw new Error("ERROR: Saldo insuficiente");
            
        }
    },

    showSaldo: function() {
        console.log(`Seu saldo atual é: R$${this.saldo.toFixed(2)}`)   
    }

}