/*
Escreva uma função que receba um array de números e retornará a soma
de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
*/

function somarNumeros(numeros) {
    let soma = 0;
    for (let item of numeros) {
        soma += item;
    }
    return soma
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));

/*
Respostas do professor:

Resolução 1:
function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length
    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}
Obs.: Estudar

Resolução 2:
function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
    return soma
}

Resolução 3:
function somarNumeros(numeros) {
    const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
    return soma
}
Obs.: Estudar
*/
