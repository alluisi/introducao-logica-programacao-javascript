console.log(Date.now());
// Exibe a quantidade de milisegundos desde 1º janeiro de 1970

const futuro = Date.now() + 1000; // 1000 equivale a 1 segundo
let quantidade = 0;

while(Date.now() < futuro)
    quantidade++;

console.log('Quantidade: ' + quantidade);

/*
Alguns resultados para comparações:
Quantidade: 4973463
Quantidade: 4816532
Quantidade: 4649198
Quantidade: 4798481
Quantidade: 5143248
*/
