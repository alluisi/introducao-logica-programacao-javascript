const a = 10;
const b = 5;
const operacao = '$'; // + - * / %

let resultado;

if (operacao === '+')
    resultado = a + b;
else if (operacao === '-')
    resultado = a - b;
else if (operacao === '*')
    resultado = a * b;
else if (operacao === '/')
    resultado = a / b;
else if (operacao === '%')
    resultado = a % b;
else // pode ser finalizado sem ter o else
    resultado = 'Use símbolos aritiméticos'

console.log(resultado);
