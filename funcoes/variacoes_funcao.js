// Função COM parâmetros e COM retorno
function somar(a, b) {
    return a + b;
}
console.log(somar(30, 56));

// Função COM parâmetros e SEM retorno
function exibirMultiplicacao(a, b) {
    console.log(a * b);
}
exibirMultiplicacao(7, 9);

// Função SEM parâmetros e COM retorno
function retornarDataAtual() {
    return new Date();
}
console.log(retornarDataAtual());

// Função SEM parâmetros e SEM retorno
function retornarHoraAtual() {
    console.log(new Date().getHours());
}
retornarHoraAtual();
