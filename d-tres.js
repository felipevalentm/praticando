// Faça um programa que calcule e imprima o salário a ser transferido 
// para um funcionário. Para realizar o calculo, 
// primeiro receba o valor do salário bruto (valorSalario) 
// e adicional dos benefícios (valorBeneficios).

const { gets, print } = require('./d-tres-aux.js');

const salarioBruto = 1814.00;

const beneficios = [];

for (let i = 0; i < 3; i++) {
    beneficios.push(gets(i));
}

const totalB = beneficios[0] + beneficios[1] + beneficios[2];

let percentual = 0;

if (salarioBruto <= 1100.00) {
    percentual = 5.00 / 100;
}
else if (salarioBruto > 1100.00 && salarioBruto <= 2500.00) {
    percentual = 10.00 / 100;
}
else if (salarioBruto > 2500.00) {
    percentual = 15 / 100;
}

print('O salário a pagar é R$ ' + ((salarioBruto - (salarioBruto * percentual)) + totalB).toFixed(2));



