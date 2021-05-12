/*
Criar uma função que receba uma string como parâmetro e conte quantas
palavras tem nela.
    Considere que todas as palavras só são separadas por um espaço.
Exemplos:
contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5
*/

function contarPalavras(frase) {
    let espaços = 0;

    for (let item of frase) {
        if (item === " ") {
            espaços++
        }
    }
    return espaços + 1
}

console.log(contarPalavras('Sou uma frase'));
console.log(contarPalavras('Me divirto aprendendo a programar'));

/*
Resposta do professor:

function contarPalavras(frase){
    const palavras = frase.split(" ")
    return palavras.length
}
Obs.: Estudar
*/
