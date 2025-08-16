// Faça um programa que receba a média de um aluno e imprima o seguinte:

// Caso a média seja < 5 imprima "REP";
// Caso a média seja >= 5 e < 7 imprima "REC";
// Caso a média seja >7 imprima "APR".

const notas = [];

notas.push(5);
notas.push(6);
notas.push(9);
notas.push(2);

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log('Sua média foi ' + media);

if (media < 5) {
    console.log ("Você está reprovado")
}
else if (media >= 5 && media < 7){
    console.log ('Você está de recuperação');
}
else {
    console.log ("Você está aprovado");
}

