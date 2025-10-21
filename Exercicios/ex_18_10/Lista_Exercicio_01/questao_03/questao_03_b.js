// Alternativa B    

function multiplyRandom(...num) {
    let result = 1;

    for (let n of num) {
        result *= n;
    }

    return result; 
}

console.log(multiplyRandom(3,7,8,9))