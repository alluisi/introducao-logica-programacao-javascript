let a = 7;
let b = 94;
// Efetuar a troca de valor das variáveis
// depois da troca... a = 94 e b = 7
console.log(a);
console.log(b);

// Meu resultado
// a = 94;
// b = 7;

// Resposta do professor
// let temp = a;
// a = b;
// b= temp;

// Melhor jeito de fazer
[a, b] = [b, a];

console.log(a);
console.log(b);
