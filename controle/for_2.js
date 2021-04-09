/*
for(;;)
ou
for(; true; )
exemplos de for com laço infinito
*/

let controle = 1;

for ( ; controle <= 10; ) {
    console.log(controle);
    controle++;
}
// dá pra usar o for como no while, mas não é o ideal
