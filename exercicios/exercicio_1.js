/*
Crie uma função que retorna a string "Olá, " concatenada
com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final.
Exemplos:
cumprimentar("Leonardo") // retornará "Olá, Leonardo!"
cumprimentar("Maria") // retornará "Olá, Maria!"
*/

function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar('Alessandra'));

/*
resposta do professor:

function cumprimentar(nome) {
const saudacao = "Olá"
return [saudacao, nome].join(', ').concat("!")
}

function cumprimentar(nome) {
return "Olá, " + nome + "!"
}
*/
