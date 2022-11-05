/*
Realizar un programa que permita ingresar por teclado 10 números en un array debe:

Mostrar el número mayor 
Mostrar el número menor
Mostrar los números pares
Mostrar los números impares
Ordenarlos de manera Ascendente
Ordenarlos de manera Descendente
*/

let numeros = [];

for (let i = 0; i < 10; i++) {
    let ingresarNumeros = prompt("Ingresar numero: ");
    numeros.push(ingresarNumeros);
}
console.log("Array completo: " + numeros);

numeros.forEach((element) => {
    if (element % 2 == 0) return console.log(element + " es par");
    else return console.log(element + " es impar");
});

let ordenarMenorMayor = numeros.sort((a, b) => {
    return a - b;
});
console.log("Numeros de Menor a Mayor: " + ordenarMenorMayor);
console.log("Menor numero: " + ordenarMenorMayor[0]);

let ordenarMayorMenor = ordenarMenorMayor.reverse();
console.log("Numeros de Mayor a Menor: " + ordenarMayorMenor);
console.log("Mayor numero: " + ordenarMayorMenor[0]);
