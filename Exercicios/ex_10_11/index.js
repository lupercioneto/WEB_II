/*
    Higher-Order Functions - map, filter, reduce (métodos de iteração)
*/

// map() realiza um mapeamento em cima de um array, gerando um novo array transformado

const nums = [1,4,67,8,34];

const double = nums.map(num => num * 2);
console.log(double)

// filter() itera em cima de um array, realizando uma filtragem dos elementos. Retorna um novo array

const evens = nums.filter(num => num % 2 === 0);
console.log(evens)


// reduce() - itera um array, realizando uma operação de redução e retorna um único valor ao final.

const sumEvens = nums.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0)
console.log(sumEvens)
