function retornaUmaFuncao() {
    function bomDia() {
        return'Bom dia!';
    }
    return bomDia; // bomDia()
}
console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());

const umaFuncao = retornaUmaFuncao();
console.log(umaFuncao());
