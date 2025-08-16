// Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior número par e o menor número impar. 

const { gets, print } = require('./d-dois-aux');

let lista = [];

for (let i = 0; i < 10; i++) {
    lista.push(gets(i)); }

print(lista);

let maiorP = 0;
let maiorI = 0;

for (let i = 0; i < 10; i++) {
    if (lista[i] % 2 == 0) {
        if (lista[i] > maiorP) {
            maiorP = lista[i]; 
        } 
}
    else {
        if (lista[i] > maiorI) {
            maiorI = lista[i];
        }
    }
}

print(maiorP);
print(maiorI);