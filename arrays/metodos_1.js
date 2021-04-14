const numeros = [1, 2, 3, 4, 5, 4];

numeros[0] = 100; //altera o elemento (não é um método)
numeros.push(6); //insere um elemento

console.log(numeros.indexOf(4)); /* mostra qual o indice do primeiro
                                elemento caso haja elementos iguais*/
console.log(numeros.indexOf(4, 4)); /* para exibir o segundo elemento
                                    igual é necessário especificar
                                    o indice que irá iniciar*/
console.log(numeros.includes(10)); /* diz se o elemento está incluso
                                    no array*/
console.log(numeros.join(' - ')); //une os elementos

const numeros2 = numeros.concat(7, 8, 9); /* gera um novo array
                                            concatenado*/
console.log(numeros2);
