/*
Crie uma função que recebe um array de números e retorna o segundo
maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6
*/

function segundoMaior(numeros) {
    let maiorNumero = 0;
    let arraySemOMaior = [];
    let segundo = 0;

    for (let valor of numeros) {
        if (valor > maiorNumero) {
            maiorNumero = valor;
        }
    }
    for (let valor of numeros) {
        if (valor !== maiorNumero) {
            arraySemOMaior.push(valor);
        }
    }
    for (let valor of arraySemOMaior) {
        if (valor > segundo) {
            segundo = valor;
        }
    }
    return segundo;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));

/*
Respostas do professor:
Obs.: Estudar todas!

Resolução 1:
function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior
    
    numeros.forEach( (numero, indice) => {
    if( numero > numeros[indiceDoMaior] )
    indiceDoMaior = indice
    })
    
    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]
    
    numeros.forEach(numero => {
    if(numero > segundoMaior)
    segundoMaior = numero
    })
    
    return segundoMaior
}

Resolução 2:
function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    
    return segundoMaior
}

Resolução 3:
function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    
    return segundoMaior
}
*/
