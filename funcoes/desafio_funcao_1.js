/*
Função: 2 parâmetros -> console.log(+) 2X
...(3, 4)
...(31, 98)
Função: 2 parâmetros -> console.log(-) 2X
...(11, 7)
...(19, 52)

Minha resposta:
const preco1 = 146
const preco2 = 109
const juros1 = 17
const juros2 = 9
const desconto1 = 32
const desconto2 = 24

function pagamentoAtrasado (preco, juros) {
    console.log(preco + juros);
}
function pagamentoAdiantado (preco, desconto) {
    console.log(preco - desconto);
}
pagamentoAtrasado(preco1, juros1);
pagamentoAtrasado(preco2, juros2);
pagamentoAdiantado(preco1, desconto1);
pagamentoAdiantado(preco2, desconto2);
*/
function somar(n1, n2) {
    console.log(n1 + n2);
}
function subtrair(a, b) {
    console.log(a - b);
}
somar(3, 4);
somar(31, 98);
subtrair(11, 7);
subtrair(19, 52);
