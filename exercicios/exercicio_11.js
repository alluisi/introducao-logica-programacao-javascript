/*
Crie uma função que receba uma array e retorne o primeiro e o último
elemento desse array como um novo array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"])
retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])
retornará [-100, 16]
*/
function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

console.log(receberPrimeiroEUltimoElemento([7, 14, 'Olá']));
console.log(receberPrimeiroEUltimoElemento([-100, 'aplicativo', 16]));

/*
Obs.: Eu havia feito como na resolução 1, mas resolvi deixar uma
    das respostas do professor pois, acabei de descobrir a
    funcionalidade do método shift ;)
    Similar ao pop, porém ao invés de remover o ultimo, remove o
    primeiro.

Resposta do professor:

Resolução 1:
function receberPrimeiroEUltimoElemento(elementos) {
    const indiceDoPrimeiroElemento = 0
    const indiceDoUltimoElemento = elementos.length - 1
    const primeiroElemento = elementos[indiceDoPrimeiroElemento]
    const ultimoElemento = elementos[indiceDoUltimoElemento]

    return [primeiroElemento, ultimoElemento]
}

Resolução 3:
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()

    return [primeiroElemento, ultimoElemento]
}
*/
