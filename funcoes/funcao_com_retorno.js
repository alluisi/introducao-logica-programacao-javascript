function sempreRetornaUm() {
    return 1;
    console.log('Não executa depois do return')
}
let valor = sempreRetornaUm();
console.log(valor);

function textoOuNumero(retornaTexto) {
    //  return retornaTexto ? 'Sou um texto' : 123;
    if (retornaTexto)
        return 'Sou um texto!'
    else
        return 123;
}
let texto = textoOuNumero(true);
console.log(texto);
console.log(textoOuNumero(false));
