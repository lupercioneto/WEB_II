// Estrutura de repetição (for of, for each, for in) e Objetos literais 

const foods = ["Maçã", "Mamão", "Doce", "Banana"]

for (let food of foods) { // Na prática é o mesmo que um object.forEach
    console.log()    
}




const school = {
    name: "IFCE",
    address: "R. XXXX, YYYY 00003",
    ringSchoolBell: function() {
        console.log("Playing the school bell!")
    },
    cursos: ["ADS", "Agropecuária", "Redes de Computadores", "Letras"]
}

for (let key in school) { // Itera sobre chaves de objetos
    console.log(`Chave: '${key}' - Tipo: ${typeof key}`)

    
}