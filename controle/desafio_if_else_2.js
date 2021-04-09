const nota = 8.99;
let conceito;

if (nota >= 9 && nota <= 10)
    conceito = 'A';
else if (nota >= 7 && nota < 9)
    conceito = 'B';
else if (nota >= 5 && nota < 7)
    conceito = 'C';
else if (nota >= 4.5 && nota < 5)
    conceito = 'D';
else if (nota < 4.5 && nota >= 0)
    conceito = 'F';
else
    conceito = 'Nota inválida';

console.log(conceito);
