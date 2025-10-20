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
    array.forEach(num => {
        num 
    });
}