/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa
iniciar criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e,
como segundo parâmetro, um array de strings. A função deverá filtrar
as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes
    ("pro", ["programação", "mobile", "profissional"])
// retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])
// retornará ["javascript", "java"]
*/

function buscarPalavrasSemelhantes(palavra, frase) {
    let semelhantes = [];

    for (let item of frase) {
        if (item.includes(palavra)) {
            semelhantes.push(item)
        }
    }
    return semelhantes
}

console.log(buscarPalavrasSemelhantes
    ("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes
    ("java", ["javascript", "java", "c++"]));

/*
Resposta do professor:

function buscarPalavrasSemelhantes(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}
*/
