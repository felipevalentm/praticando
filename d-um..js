// Faça um programa que receba a média de um aluno e imprima o seguinte:

// Caso a média seja < 5 imprima "REP";
// Caso a média seja >= 5 e < 7 imprima "REC";
// Caso a média seja >7 imprima "APR".

const { print, gets } = require('./d-um-aux');

let soma = 0;
const qtdNotas = 4;

for (let i = 0; i < 3; i++) {
    soma += gets();
}

const media = soma / qtdNotas;

console.log(media);

if (media >= 1 && media < 5) {
    print("Você está reprovado(a)!")
} else if (media >= 5 && media < 7){
    print('Você está de recuperação');
} else if (media >= 7){
    print('Você está aprovado(a)!');
} else {
    print("Inválido");
}   

