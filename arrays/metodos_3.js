const numeros = [10, 20, 30, 40,];

/* Formas de percorrer os elementos do array

for loop:
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

for(let n of numeros) {
    console.log(n);
}
*/
numeros.forEach(function() {
    console.log('forEach');
}); //Exibi uma vez para cada elemento elementos

function paraCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(paraCadaElemento);

numeros.forEach(function(el) {
    console.log(el);
}); //Exibi somente os elementos

numeros.forEach(function(_, i) {
    console.log(i);
}); //Exibi somente o indice

numeros.forEach(function(_, _, a) {
    console.log(a);
}); //Exibi somente o array
