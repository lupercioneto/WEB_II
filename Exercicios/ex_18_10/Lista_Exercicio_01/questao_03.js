// Alternativa A
function calculate(num1, num2, charOp) {
    let operResult
    
    switch (charOp) {
        case "+":
            operResult = num1 + num2 
            break;
    
        case "-":
            operResult = num1 - num2
            break;
        
        case "*":
            operResult = num1 * num2 
            break;
        
        case "/":
            operResult = num1 / num2
            break;
        
        default: 
            console.log("Caractere inválido.")
            return 
        }

        return operResult
}

console.log(calculate(3,5,"+"))

// Alternativa B    

function multiplyRandom(...num) {
    let result = 1;

    for (let n of num) {
        result *= n;
    }

    return result; 
}

console.log(multiplyRandom(3,7,8,9))

// Alternativa C

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }; 

    return num * factorial(num - 1);
}

console.log(factorial(5)); 

// Alternativa D

function findOdds(numArrays) {
    let odds = []

    array.forEach(num => {
        if (num % 2 != 0) {
            odds.push(num)
        } 
    });

    console.log(`Os números ímpares desse array são: ${odds}`)
}

findOdds([2,12,34,67,99,111,341])

// Alternativa E

function calcPrice(price, qtt, sale = 0) {
    let totalPrice = (price * qtt) - sale 

    return totalPrice

}

console.log(`O preço total do(s) produto(s) é : R$${totalPrice.toFixed(2)}`)

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