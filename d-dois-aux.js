
const entradas = [90, 250, 51, 98, 78, 15, 1 ,2];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
