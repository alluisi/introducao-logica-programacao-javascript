/*
Elabore uma função que recebe um número como parâmetro e retorne uma
string com o símbolo "+" na quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/
function simboloMais(n) {
    return '+' .repeat(n)
}

console.log(simboloMais(2));
console.log(simboloMais(4));

/*
Obs.: Assim como no exercício anterior, resolvi deixar uma
    das respostas do professor pois, acabei de descobrir a
    funcionalidade do método repeat ;)
    (method) String.repeat(count: number): string

Resposta do professor:

Resolução 1:
function simboloMais(quantidade) {
    let resultado = ''

    for(let i = 0; i < quantidade; i++)
        resultado += '+'
    return resultado
}

Resolução 2:
function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}
*/
