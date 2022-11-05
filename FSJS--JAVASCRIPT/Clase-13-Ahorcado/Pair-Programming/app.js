// Array de palabras
var palabras = [
    ["atlantico", "Un océano"],
    ["ordenador", "Una máquina"],
    ["laurel", "Un árbol"],
    ["plaza", "Espacio público"],
    ["rueda", "Gran invento"],
    ["cereza", "Una fruta"],
    ["petanca", "Un juego"],
    ["higuera", "Un árbol"],
    ["everest", "Un monte"],
    ["relampago", "Antecede al trueno"],
    ["jirafa", "Un animal"],
    ["luxemburgo", "Un país"],
    ["uruguay", "Un país"],
    ["ilustracion", "Representación gráfica"],
    ["excursion", "Actividad en la naturaleza"],
    ["empanadilla", "De la panadería"],
    ["pastel", "De la pastelería"],
    ["colegio", "Lugar para estudiar"],
    ["carrera", "Competición"],
    ["mermelada", "Confitura"],
];
// Palabra a averiguar
var palabra = "";
// Nº aleatorio
var rand;
// Palabra oculta
var oculta = [];
// Elemento html de la palabra
var hueco = document.getElementById("palabra");
// Contador de intentos
var cont = 6;
// Botones de letras
var buttons = document.getElementsByClassName("letra");
// Boton de reset
var btnInicio = document.getElementById("reset");

// ### FUNCIONES ###

// Escoger palabra al azar
function generaPalabra() {
    rand = (Math.random() * 19).toFixed(0);
    palabra = palabras[rand][0].toUpperCase();
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
    hueco.innerHTML = "";
    for (var i = 0; i < num; i++) {
        oculta[i] = "_";
    }
    hueco.innerHTML = oculta.join("");
}

//Generar abecedario
function generaABC(a, z) {
    document.getElementById("msg-final").innerHTML = "";
    document.getElementById("abcdario").innerHTML = "";
    var i = a.charCodeAt(0),
        j = z.charCodeAt(0);
    var letra = "";
    for (; i <= j; i++) {
        letra = String.fromCharCode(i).toUpperCase();
        document.getElementById("abcdario").innerHTML +=
            "<button class='btn btn-primary p-2 m-1' value='" +
            letra +
            "' onclick='intento(\"" +
            letra +
            "\")' class='letra' id='" +
            letra +
            "'>" +
            letra +
            "</button>";
        if (i == 110) {
            document.getElementById("abcdario").innerHTML +=
                "<button class='btn btn-primary  p-2 m-1' value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='" + letra + "'>Ñ</button>";
        }
    }
}

// Chequear intento
function intento(letra) {
    if (cont > 0) {
        document.getElementById(letra).disabled = true;
        if (palabra.indexOf(letra) != -1) {
            for (var i = 0; i < palabra.length; i++) {
                if (palabra[i] == letra) oculta[i] = letra;
            }
            hueco.innerHTML = oculta.join("");
            document.getElementById("acierto").innerHTML = "Bien!";
            document.getElementById("acierto").className += "acierto verde";
        } else {
            cont--;
            document.getElementById("intentos").innerHTML = cont;
            document.getElementById("acierto").innerHTML = "Fallo!";
            document.getElementById("acierto").className += "acierto rojo";
            document.getElementById("image" + cont).className += "fade-in";
        }
        compruebaFin();
        setTimeout(function () {
            document.getElementById("acierto").className = "";
        }, 800);
    }
}

// Obtener pista
function pista() {
    document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}

// Compruba si ha finalizado
function compruebaFin() {
    if (oculta.indexOf("_") == -1) {
        document.getElementById("msg-final").innerHTML = "Felicidades !!";
        document.getElementById("msg-final").className += "zoom-in";
        document.getElementById("palabra").className += " encuadre";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById("reset").innerHTML = "Empezar";
        btnInicio.onclick = function () {
            inicio();
        };
    } else if (cont == 0) {
        document.getElementById("msg-final").innerHTML = "Perdiste Intenta de Nuevo";
        document.getElementById("msg-final").className += "zoom-in";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById("reset").innerHTML = "Empezar";
        btnInicio.onclick = function () {
            inicio();
        };
    }
}

// Restablecer juego
function inicio() {
    palabra = "";
    oculta = [];

    document.getElementById("palabra").classList.remove("encuadre");
    generaPalabra();
    pintarGuiones(palabra.length);
    generaABC("a", "z");
    cont = 6;
    document.getElementById("intentos").innerHTML = cont;
}

// Iniciar
window.onload = inicio();
