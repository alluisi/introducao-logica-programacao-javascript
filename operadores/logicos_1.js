let temDinheiro = true;
let estaEnsolarado = false;
let carroEstaNaGaragem = true;

let resultadoE = "#1 (AND) - Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE); // precisa que os dois sejam true (verdadeiro)

let resultadoOU = "#2 (OR) - Vai pro shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU); // precisa que apenas um seja true

// XOR
console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

// Negação lógica
console.log(!true); // Não verdadeiro
console.log(!false); // Não falso
