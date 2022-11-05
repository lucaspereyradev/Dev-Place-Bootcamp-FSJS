let jugador1 = [];
let jugador2 = [];
let jugador3 = [];
let arbitro = [];

function almacenarNumeros(jugador) {
    let i = 0;
    while (i < 4) {
        let numeros = parseInt(prompt("Ingrese 4 numeros entre 0 y 10: "));
        if (numeros >= 0 && numeros <= 10) {
            i++;
            jugador.push(numeros);
        } else {
            alert("Ingresaste un numero menor a 0 o mayor a 10.");
        }
    }
}

function almacenarNumerosArbitro(arbitro) {
    let i = 0;
    while (i < 2) {
        let numeros = parseInt(prompt("Arbitro ingrese 2 numeros entre 0 y 10: "));
        if (numeros >= 0 && numeros <= 10) {
            i++;
            arbitro.push(numeros);
        } else {
            alert("Ingresaste un numero menor a 0 o mayor a 10.");
        }
    }
}

function calcularAciertos(jugadores, arbitro) {
    let i = 0;
    jugadores.forEach((element) => {
        if (element >= arbitro[0] && element <= arbitro[1]) {
            i++;
        }
    });
    return i;
}

alert("Jugador 1");
almacenarNumeros(jugador1);
alert("Jugador 2");
almacenarNumeros(jugador2);
alert("Jugador 3");
almacenarNumeros(jugador3);
alert("Arbitro");
almacenarNumerosArbitro(arbitro);

arbitro.sort((a, b) => {
    return a - b;
});

alert(
    "Aciertos jugador 1: " +
        calcularAciertos(jugador1, arbitro) +
        "\nAciertos jugador 2: " +
        calcularAciertos(jugador2, arbitro) +
        "\nAciertos jugador 3: " +
        calcularAciertos(jugador3, arbitro)
);

console.log(jugador1);
console.log(jugador2);
console.log(jugador3);
console.log(arbitro);
