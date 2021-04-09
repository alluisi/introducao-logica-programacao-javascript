const nota = 9.8;

if (nota >= 9 && nota <= 10)
    console.log('A');

if (nota >= 7 && nota < 9)
    console.log('B');

if (nota >= 5 && nota < 7)
    console.log('C');

if (nota >= 4.5 && nota < 5)
    console.log('D');

if (nota < 4.5 && nota >= 0)
    console.log('F');

if (nota > 10 || nota < 0)
    console.log('Nota inválida');
