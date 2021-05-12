/*
Numa aplicação Web de investimento financeiro da qual você faz parte
da equipe de desenvolvimento, pretende-se adicionar a funcionalidade
de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um
array com uma quantidade indeterminada de números e retorne a média
simples desses números.
    A média simples é o resultado da soma de todos os números dividido
    pela quantidade de números.

Exemplos:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
*/

function calcularMedia(numeros) {
    let soma = 0;
    for (let item of numeros) {
        soma += item;
    }
    return soma / numeros.length
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));

/*
Respostas do professor:

Resolução 1:
function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    let somaTotal = 0
    for(numero of numeros) {
        somaTotal += numero
    }
    return somaTotal / quantidadeDeNumeros
}

Resolução 2:
function calcularMedia(numeros) {
    const quantidadeDeNumeros = numeros.length
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
    return somaTotal / quantidadeDeNumeros
}
Obs.: Estudar
*/
