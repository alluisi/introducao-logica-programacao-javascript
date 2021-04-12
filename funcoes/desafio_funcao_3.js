/* 3 notas
descarta a menor e faz a média das outras duas
Se < 4 -> Reprovado
Se >= 4 e < 7 -> Recuperação
Se >= 7 -> Aprovado
*/
const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function notaMedia(n1, n2, n3) {
    if (n1 >= n2 && n2 >= n3)
        return (n1 + n2) / 2;
    else if (n1 >= n3 && n3 >= n2)
        return (n1 + n3) / 2;
    else if (n2 >= n1 && n1 >= n3)
        return (n2 + n1) / 2;
    else if (n2 >= n3 && n3 >= n1)
        return (n2 + n3) / 2;
    else if (n3 >= n1 && n1 >= n2)
        return (n3 + n1) / 2;
    else (n3 >= n2 && n2 >= n1)
    return (n3 + n2) / 2;
}

const notaFinal = notaMedia(nota1, nota2, nota3);
console.log(`Nota Final: ${notaFinal}`);

function resultado(notaFinal) {
    if (notaFinal < 4)
        return 'Reprovado';
    else if (notaFinal >= 4 && notaFinal < 7)
        return 'Recuperação';
    else if (notaFinal >= 7)
        return 'Aprovado';
}
console.log(`Situação do aluno: ${resultado(notaFinal)}`);

/* resposta do professor
function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;
}

function mediaDuasMaiores(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3));
    if (menorNota === n1)
        return (n2 + n3) / 2;
    else if (menorNota === n2)
        return (n1 + n3) / 2;
    else
        return (n1 + n2) / 2;
}

function mediaParaStatus(media) {
    if (media >= 7)
        return 'Aprovado';
    else if (media >= 4)
        return 'Recuperação';
    else
        return 'Reprovado';
}
const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é ${statusFinal}!`);
*/