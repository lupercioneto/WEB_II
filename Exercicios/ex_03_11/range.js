const range = function (start, end, step = 1) {
    if (!end) { // Undefined é avaliado como falso
        end = start; 
        [start, end] = [1, start]; // Desestruturação de valores
        
    }

    const isAsc =  start < end; // Verificar se o  é crescente ou decrescente

    const range = [] // Armazenar os valores
    
    // Percorrer 
    for (let index = start; 
        isAsc ? index <= end : index >= end; 
        isAsc ? i += step : i -= step) { // Se for crescente, incrementa; Se não, decrementa    
    
        range.push(index)
    }
    
    return range
    
}

console.log(range(4))