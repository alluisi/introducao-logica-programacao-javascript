/*
Desenvolva uma função que recebe dois números inteiros não negativos
(maiores ou iguais a zero) e realize a multiplicação deles. Porém,
não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
*/
function multiplicar(n1, n2) {
    let soma = 0
    for (let i = 0; i < n2; i++)
        soma += n1
    return soma
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));

/*
Obs.: Essa eu não consegui sozinha :(

Resposta do professor:

Resolução 1:
function multiplicar(numeroA, numeroB) {
let resultado = 0
// a otimização feita para diminuir a quantidade de chamadas
// recursivas pode ser realizada aqui para diminuir a quantidade
// de loops
for(let i = 0; i < numeroB; i++)
resultado += numeroA
return resultado
}

Resolução 2:
function multiplicar(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0
    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}

Resolução 3:
function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0

const maiorNumero = Math.max(numeroA, numeroB)
const menorNumero = Math.min(numeroA, numeroB)

function multiplicarRecursivamente(numero, multiplicador) {
    return (
        multiplicador === 1 ?
        numero :
        numero + multiplicarRecursivamente(numero, multiplicador-1)
    )
}
// nessa versão, garantimos que o multiplicador será o menor número,
// portanto haverá o mínimo de chamadas recursivas

return multiplicarRecursivamente(maiorNumero, menorNumero)
}
*/
