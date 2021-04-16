/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro
é o elemento que repetirá, enquanto que o segundo será o número de
vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/
function repetir(elemento, quantidade) {
    return Array(quantidade).fill(elemento)
}

console.log(repetir('código', 2));
console.log(repetir(7, 3));

/*
Obs.: Eu havia feito parecido com o resultado abaixo, mas
      resolvi deixar uma das respostas do professor pois
      acabei de descobrir a funcionalidade do método fill ;)
      (method) Array<any>.fill(value: any, start?: number, 
      end?: number): any[]

Resposta do professor:

function repetir(item, quantidade) {
    let resultado = []
    
    for (let i = 0; i < quantidade; i++)
        resultado.push(item)
    return resultado
}
*/
