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
