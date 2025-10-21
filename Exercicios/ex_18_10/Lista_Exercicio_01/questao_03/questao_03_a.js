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





