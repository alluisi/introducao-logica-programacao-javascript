/*
[1, 1] [1, 2] [1, 3]
[2, 1] [2, 2] [2, 3]
[3, 1] [3, 2] [3, 3]
*/
/*
for (let i = 1; i <= 3; i++) { -> o laço externo executa uma vez,
    console.log(i);               ou seja, 3X
    for (let j = 1; j <= 3; j++) -> o laço interno executa todas as vezes
        console.log(j);             e volta para o laço externo, ou seja 9X
}
*/
for (let i = 1; i <= 3; i++) {
    let linha = '';
    for (let j = 1; j <= 3; j++)
        linha += `[${i}, ${j}] `;
    console.log(linha);
}
/*
[1, 2] [1, 3]
[2, 1] [2, 3]
[3, 1] [3, 2]
*/
for (let i = 1; i <= 3; i++) {
    let linha = '';
    for (let j = 1; j <= 3; j++)
        if (i !== j)
            linha += `[${i}, ${j}] `;
    console.log(linha);
}
