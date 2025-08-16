
// Você receberá 7 números inteiros como entrada. 
// Esses números estarão em um array onde todos serão pares ou 
// todos serão ímpares, exceto por um único número diferente (outlier).
// Sua tarefa é:
// - Ler os 7 números usando a função gets().
// - Armazenar todos eles em uma lista.
// - Identificar e exibir apenas os números 
// pares presentes na lista.

const { gets } = require("./d-quatro-aux");
const lista = [];

for (let i = 0; i < 7; i++) {
    lista.push(gets());
}

for (let i = 0; i < lista.length; i++) {
    const valorP = lista[i];
    if (valorP % 2 == 0) {
        console.log("O numero par é: ", valorP);
    }
}
