let nota = 12.7;

// Match.ceil -> arredonda o valor para cima
// Match.floor -> arredonda o valor para cima

switch (Math.ceil(nota)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 6:
    case 5:
        console.log('Recuperação!');
        break;
    case 4:
    case 3:
    case 2:
        console.log('Reprovado!');
        break;
    case 1:
    case 0:
        console.log('Estude mais!');
        break;
    default:
        console.log('Nota inválida!');
}
