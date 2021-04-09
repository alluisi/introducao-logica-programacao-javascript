/*
A+ -> 10
A -> 9
B+ -> 8
B -> 7
C+ -> 6
C -> 5
D+ -> 4
D -> 3
E+ -> 2
E -> 1
F -> 0
*/

let nota = 8.7;

switch (Math.ceil(nota)) {
    case 10:
        console.log('A+');
        break;
    case 9:
        console.log('A');
        break;
    case 8:
        console.log('B+');
        break;
    case 7:
        console.log('B');
        break;
    case 6:
        console.log('C+');
        break;
    case 5:
        console.log('C');
        break;
    case 4:
        console.log('D+');
        break;
    case 3:
        console.log('D');
        break;
    case 2:
        console.log('E+');
        break;
    case 1:
        console.log('E');
        break;
    case 0:
        console.log('F');
        break;
    default:
        console.log('Nota inválida!');
}
/*
resposta do professor:
const conceito = 'C+';

switch (conceito) {
    case 'A+': console.log(10); break;
    case 'A': console.log(9); break;
    case 'B+': console.log(8); break;
    case 'B': console.log(7); break;
    case 'C+': console.log(6); break;
    case 'C': console.log(5); break;
    case 'D+': console.log(4); break;
    case 'D': console.log(3); break;
    case 'E+': console.log(2); break;
    case 'E': console.log(1); break;
    case 'F': console.log(0); break;
    default: console.log('Conceito inválido!');
*/
