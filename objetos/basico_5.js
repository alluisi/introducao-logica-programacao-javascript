const cliente = {
    codigo: 16531,
    nome: 'Ana',
    vip: true,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        complemento: 'Apto 101 Bloco B',
        pontosRef: [
            'Hospital X',
            'Shopping Y',
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
}

console.log(cliente['endereco']['logradouro']);
console.log(cliente.endereco.logradouro);
console.log(cliente.endereco.pontosRef[0]);
