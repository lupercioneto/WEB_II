# Resposta às perguntas - Prática Guiada

## Questão 01
    1. O que precisamos fazer para adicionar um script na seção <head> de uma página HTML e definir que ele só deve ser executado ao finalizar o carregamento da página? 
   
- **Resposta**: Defininmos a tag `<script></script>`, referenciamos o arquivo de script com o atributo `src="index.js"` e,  `defer` na tag descrita, afim de retardar a execução do script apenas depois de toda a página ser carregada. 

--- 
## Questão 02 
    2. Considere os métodos de seleção de elementos do DOM (Document Object Model) em JavaScript listados abaixo. Relacione cada método à definição correta.


    I. document.getElementById()

    II. document.querySelector()

    III. document.getElementsByTagName()


    
    A. Retorna todos os elementos do DOM que possuem o mesmo nome de tag especificado.

    B. Retorna um único elemento do DOM com base no valor do atributo id.

    C. Retorna o primeiro elemento do DOM que corresponde ao seletor CSS especificado.

- **Resposta**: 
    
    I — B  |  II — C | III — A  
---
## Questão 03
    3. Qual método foi utilizado para adicionar a classe input-erro ao campo de entrada no trecho acima? O que é esse atributo classList?

- **Resposta**: Método usado foi o `.add`; **classList** é uma propriedade/atributo em JavaScript que facilita a forma de interagir com as classes CSS de elementos HTML.      

---

## Questão 04
    4. O que o método createElement() faz e que informação ele precisa receber como argumento?

- **Resposta**: Este método permite a criação de elementos HTLM de forma dinâmica usando DOM (*Document Object Model*). O argumento que passamos a ele refere-se ao tipo de elemento que queremos criar (Ex: `"span"` para criar uma tag `<span></span>`).

---

## Questão 05
    Em JavaScript, ao manipular elementos do DOM, os atributos innerText e innerHTML são frequentemente utilizados. Qual das alternativas abaixo descreve corretamente a diferença entre esses dois atributos?

    a — innerText somente exibe o conteúdo HTML do elemento, enquanto innerHTML somente exibe o texto visível ao usuário.

    b — innerText retorna ou define apenas o texto visível ao usuário, enquanto innerHTML retorna ou define o conteúdo HTML do elemento, incluindo tags.

    c — innerText é utilizado apenas para leitura, enquanto innerHTML pode ser utilizado tanto para leitura quanto para modificação do conteúdo do elemento.

    d — Ambos os atributos são sinônimos e podem ser usados de forma intercambiável para manipular texto e HTML.

- **Resposta**: Alternartiva **B**.

## Questão 06
    O evento de clique foi definido de que forma para os elementos span e btnExcluir (qual atributo foi usado e o que precisamos passar para esse atributo)?

- **Resposta**: O evento de clique foi definido usando a propriedade `.onclick`, interligando o uma função que deve ser executada quando uma ação de clique ocorre sobre o elemento em questão. Para o elemento **span**, foi atribuída uma função que recebe o parâmetro **evento**, permitindo acessar dados sobre o elemento e, em seguida, alterando sua classe com o trecho `classList.toggle("concluida")`. Para o elemento **btnExcluir**, uma função sem parâmetros foi utilizada, apenas excluindo o elemento com o trecho `listaTarefas.removeChild(itemTarefa)`.

---
## Questão 03 
    Os manipuladores dos eventos de clique no botão de adicionar e pressionamento da tecla Enter foram definidos de forma diferente agora, usando o método addEventListener(). Explique o funcionamento desse método e o que ele precisa receber como parâmetro.

- **Resposta**: Esse método também registra manipuladores de eventos, e podemos passar como parâmetros:
  - o tipo de evento que se deseja ouvir (neste caso, seria o argumento `"submit"`);
  - uma função *callaback* — função passada como parâmetro para outra função (neste caso, o a função também recebe **evento** como parâmetro, que contém informações sobre o que ocorreu).