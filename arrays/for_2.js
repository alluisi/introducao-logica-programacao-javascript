const notas = [7, 8, 3, 5, 10, 9, 8, 8];

/*
foreach
for(let nota of notas) {
    console.log(nota);
}
*/

let valores = '';

for(let valor of notas) {
    valores += valor + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);
