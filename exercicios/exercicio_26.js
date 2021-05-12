/*
Desenvolva uma função que receba uma frase como parâmetro e retorne
essa string somente com as consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
*/

function removerVogais(frase) {
    let consoantes = "";
    for (let letra of frase) {
        if (letra !== "a" && letra !== "A" && letra !== "e" && 
        letra !== "E" && letra !== "i" && letra !== "I" &&
        letra !== "o" && letra !== "O" && letra !== "u" && 
        letra !== "U") {
            consoantes += letra
        }
    }
    return consoantes
}

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));

/*
Respostas do professor:

Resolução 1:
function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}
Obs.: Estudar

Resolução 2:
function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
}
Obs.: Estudar
*/
