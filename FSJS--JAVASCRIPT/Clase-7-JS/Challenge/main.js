// Consigna 1
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

console.log(meses);

// Consigna 2
let numero = prompt("Ingresar numero: ");

function parImpar(numero) {
    if (numero % 2 == 0) {
        console.log("par");
    } else {
        console.log("impar");
    }
}

parImpar(numero);

// Consigna 3
var array = [];
array.push(prompt("Ingresar: "));

console.log(array);

function minOrMayus(array) {
    array.forEach((element) => {
        if (element == element.toUpperCase()) {
            console.log("Completamente en mayusculas");
        } else if (element == element.toLowerCase()) {
            console.log("Completamente en minusculas");
        } else {
            console.log("Contiene ambas");
        }
    });
}

minOrMayus(array);

//Consigna 4

function factorizar(num) {
    if (num === 0 || num === 1) return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(factorizar(5));
