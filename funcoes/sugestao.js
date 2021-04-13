/*
Sugestão:
Buscar exemplos anteriores,
criar funções anônimas e
atriburi à uma variável
*/

// Função COM parâmetros e COM retorno
const somar = function (a, b) {
    return a + b;
}
console.log(somar(30, 56));

// Função COM parâmetros e SEM retorno
const exibirMultiplicacao = function (a, b) {
    console.log(a * b);
}
exibirMultiplicacao(7, 9);

// Função SEM parâmetros e COM retorno
const retornarDataAtual = function () {
    return new Date();
}
console.log(retornarDataAtual());

// Função SEM parâmetros e SEM retorno
const retornarHoraAtual = function () {
    console.log(new Date().getHours());
}
retornarHoraAtual();
