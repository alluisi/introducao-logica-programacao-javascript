const t1 = true;
const t2 = false;

let comprarTV50 = t1 && t2; // AND
console.log(comprarTV50);

let comprarTV32 = t1 !== t2; // XOR
console.log(comprarTV32);

let tomarSorvete = t1 || t2; // OR
console.log(tomarSorvete);

let ficarEmCasa = !tomarSorvete; // NOT
console.log(ficarEmCasa);
