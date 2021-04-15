// objeto: data
// atributos: dia, mes e ano
// método: exibir -> 'dia/mes/ano'

const data = {
    dia: 02,
    mes: 11,
    ano: 1980,
    dataDeNasc: function () {
            return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(data.dataDeNasc());
