const prompt = require("prompt-sync")({ sigint: true });

// Consigna 1
class Nif {
    dni;
    letra;

    constructor(dni) {
        this.dni = dni;
        this.letra = this.calcularLetra();
    }

    calcularLetra() {
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        return letras[this.dni % 23];
    }

    leer() {
        do {
            this.dni = parseInt(prompt("Ingresa DNI: "));
        } while (this.dni <= 0);
        this.letra = this.calcularLetra();
    }

    getDni() {
        return this.dni;
    }

    setDni(dni) {
        this.dni = dni;
    }

    toString() {
        return "DNI: " + this.dni + "-" + this.letra;
    }
}

var nif = new Nif();
nif.leer();
console.log(nif.toString());

// Consigna 2
class Motor {
    arrancar;
    apagar;

    constructor(arrancar, apagar) {
        this.arrancar = arrancar;
        this.apagar = apagar;
    }
}

class Rueda {
    inflar;
    desinsflar;

    constructor(inflar, desinsflar) {
        this.inflar = inflar;
        this.desinsflar = desinsflar;
    }
}

class Ventana {
    abrir;
    cerrar;

    constructor(abrir, cerrar) {
        this.abrir = abrir;
        this.cerrar = cerrar;
    }
}

class Puerta {
    abrir;
    cerrar;

    constructor(abrir, cerrar) {
        this.abrir = abrir;
        this.cerrar = cerrar;
    }
}

class Coche {
    motor;
    rueda1;
    rueda2;
    rueda3;
    rueda4;
    puerta1;
    puerta2;

    constructor() {
        this.motor = new Motor();
        this.rueda1 = new Rueda();
        this.rueda2 = new Rueda();
        this.rueda3 = new Rueda();
        this.rueda4 = new Rueda();
        this.puerta1 = new Puerta();
        this.puerta2 = new Puerta();
    }
}

var coche = new Coche();
coche.motor(arrancar);

// Consigna 3
class Persona {
    nombre;
    edad;
    dni;

    constructor(nombre, edad, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }

    mostrar() {
        return this.nombre + " " + this.edad + " " + this.dni;
    }

    esMayorDeEdad() {
        return this.edad > 18;
    }
}

let persona = new Persona("Pepe", 20, 44123123);
let persona1 = new Persona("Carlos", 16, 47123123);

console.log(persona.mostrar());
console.log(persona.esMayorDeEdad());

console.log(persona1.mostrar());
console.log(persona1.esMayorDeEdad());

// Consigna 4
class Cuenta {
    titular;
    cantidad;

    constructor(titular) {
        this.titular = titular;
        this.cantidad = 0;
    }

    mostrar() {
        return this.titular + " " + this.cantidad;
    }

    ingresar() {
        this.titular = prompt("Ingresa titular: ");
        this.cantidad = parseFloat(prompt("Ingresa cantidad: "));
        return this.cantidad;
    }

    getTitular() {
        return this.titular;
    }

    setTitular(titular) {
        this.titular = titular;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }
}

let cuenta = new Cuenta();

cuenta.ingresar();
console.log(cuenta.mostrar());
