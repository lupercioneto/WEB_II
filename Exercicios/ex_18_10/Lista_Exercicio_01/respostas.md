# Lista 01 - Introdução ao JavaScript

## Questão 01 
Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:

A) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre em linguagens com tipagem estática?

    Linguagens de tipagem estática possuem uma verificação de tipos de dados rígida, exigindo que as variáveis declaradas/inicializadas tenham seu tipo definido de forma explícita.  
  
B) Quais são os principais benefícios da tipagem estática em termos de performance e segurança?

    Uma tipagem estática permite a antecipação de erros relacionados ao tipo de variáveis, onde pode-se localizar erros antes mesmo de compilar e executar o código escrito.

C) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica?

    Linguagens com tipagem dinâmica permitem criar variáveis sem a necessidade de declarar explicitamente o tipo de dado. Assim, a verificação de tipos ocorre apenas durante a execução do programa. Isso traz algumas vantagens, como a flexibilidade de alterar o tipo de uma variável em tempo de execução. Porém, também apresenta desafios: o desempenho geralmente é menor e a segurança é reduzida, já que erros de tipo só são detectados enquanto o programa estiver em execução — o que pode gerar falhas inesperadas e dificultar a identificação e correção de problemas.  

D) Quais são as diferenças entre linguagens com tipagem forte e fraca?

    As principais diferenças entre elas são:
    - Verificação de tipos (Em tempo de execução/Antes da execução)
    - Flexibilidade de mudança (Flexível/Rígido) 
    
    Essas diferenças tornam linguagens fortemente tipadas mais seguras e menos propensas a erros, porém rígidas. Do contrário, linguagens fracamente tipadas são mais flexíveis, porém tendem a apresentar mais erros durante a execução do código. 

E) Como linguagens híbridas conseguem combinar características de tipagem estática e dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática?

    Essas linguagens misturam os dois lados bons de cada tipagem: segurança e flexbilidade. O programador tem a possibilidade de definir explicitamente o tipo de dado de uma variável, porém é possível inferir o tipo da mesma. A inferência de tipos é um mecânimos que permite compiladores deduzirem o tipo de dado de uma variãvel sem a necessidade de declará-lo explicitamente.

F) Como a linguagem JavaScript lida com a tipagem de dados?

    JavaScript é uma linguagem de tipagem dinâmica e fraca, ou seja: Os tipos das variáveis são definidos em tempo de execução, mudar seu conteúdo pra outro tipo e ela realiza cnoversões de automáticas de tipo. 

## Questão 02
A fim de revisar assuntos de lógica de programação e praticar a sintaxe básica do JavaScript, implemente as soluções para os seguintes problemas, utilizando a linguagem JavaScript:

A) Escreva um programa que leia um valor em R$ (reais) e a cotação atual do dólar americano,
após isso, converta o valor de entrada para US$ (dólar americano) e exiba o resultado.
 
B) Escreva um programa que calcule o perímetro (circunferência) de um círculo a partir do valor
do raio.

C) Escreva um programa para calcular a nota final de um aluno de curso de graduação do IFCE, sabendo que o semestre letivo é dividido em 2 etapas (N1 e N2) e a nota final é obtida a partir de uma média ponderada das notas obtidas nas 2 etapas. Os pesos para cada etapa são os seguintes: N1, peso 2; N2, peso 3. O programa deve solicitar ao aluno as notas de cada etapa
e, ao final, o programa deve exibir uma mensagem informando qual a sua nota final e se ele está aprovado ou reprovado, sabendo que a nota mínima para aprovação é 7,0.

- R

D) Dados n números inteiros positivos, calcule e exiba a soma dos que são primos.

## Questão 03
Ainda revisando assuntos de lógica de programação, mas avançando com a utilização de estruturas de dados e funções no JavaScript, resolva os seguintes problemas:

A) Escreva uma função que receba dois números e um caractere como argumentos. O caractere recebido informa que tipo de operação deve ser realizada. Por exemplo, ao receber o caractere “+”, a função deve calcular a soma dos números passados como argumento e retornar o resultado. Use “+” para soma, “-” para subtração, “/” para divisão e “*” para multiplicação.

B) Escreva uma função que receba uma quantidade não específica (aleatória) de números como argumentos e retorne o produtório dos números passados.

C) Implemente uma função que receba um número e retorne seu fatorial. Use recursividade.

D) Implemente uma função que receba um array de números e retorne um outro array contendo somente os números ímpares encontrados.

E) Suponha que você está implementando um sistema de e-commerce e precise calcular o valor total de um produto no carrinho do cliente, aplicando ou não um desconto. Nesse contexto, escreva uma função que receba o valor unitário do produto, a quantidade
solicitada e o desconto a ser aplicado e retorne o valor total da compra. Ao chamar a função, podemos passar ou não o desconto a ser aplicado. Caso nenhum valor de desconto seja passado, o padrão deve ser 0 (sem desconto).

F) Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da conta. O objeto deve ter métodos para depositar, sacar e informar saldo. O método depositar, deve receber o valor a ser adicionado ao saldo; o método sacar deve receber o valor a ser debitado do saldo (caso haja saldo disponível); o método informar saldo deve exibir uma mensagem informando ao usuário o seu saldo atual.

