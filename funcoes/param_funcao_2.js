function somar(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
}
console.log(somar(1, 2, 3, 4, 5, 6)); // O JS iguinora e não gera erro
console.log(somar(1, 2, 3, 4));        // dando mais flexibilidade,
console.log(somar(1, 2, 3));            // mas não faz sentido o uso
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());
