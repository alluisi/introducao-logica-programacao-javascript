// Parâmetro (Nota) -> Retorno (Conceito)

function conceito(nota) {
    if (nota > 9 && nota <= 10)
        return 'A+'
    else if (nota > 8 && nota <= 9)
        return 'A';
    else if (nota > 7 && nota <= 8)
        return 'B+';
    else if (nota > 6 && nota <= 7)
        return 'B';
    else if (nota > 5 && nota <= 6)
        return 'C+';
    else if (nota > 4 && nota <= 5)
        return 'C';
    else if (nota > 3 && nota <= 4)
        return 'D+';
    else if (nota > 2 && nota <= 3)
        return 'D';
    else if (nota > 1 && nota <= 2)
        return 'E+';
    else if (nota > 0 && nota <= 1)
        return 'E';
    else if (nota == 0)
        return 'F';
    else
        return null;
}
console.log(conceito(0));

/* resposta do professor
function notaParaConceito(nota) {
    switch(Math.ceil(nota)) {
        case 10: return 'A+';
        case 9: return 'A';
        case 8: return 'B+';
        case 7: return 'B';
        case 6: return 'C+';
        case 5: return 'C';
        case 4: return 'D+';
        case 3: return 'D';
        case 2: return 'E+';
        case 1: return 'E';
        case 0: return 'F';
        default: return null;
    }
}
console.log(`O conceito do Bruno é ${notaParaConceito(6.001)}`);
console.log(`O conceito da Laura é ${notaParaConceito(8.9)}`);
*/
