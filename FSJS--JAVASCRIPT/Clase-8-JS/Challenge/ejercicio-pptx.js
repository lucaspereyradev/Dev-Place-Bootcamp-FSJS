class Personas {
    nombre;
    apellido;
    edad;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    fullname() {
        return this.nombre + " " + this.apellido;
    }

    esMayor() {
        return this.edad >= 18;
    }
}

class Mascota {
    mascota;
    raza;
    nombre;
    edad;

    constructor(mascota, raza, nombre, edad) {
        this.mascota = mascota;
        this.raza = raza;
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Tareas {
    id;
    titulo;
    completada;
    fechaCreada;

    constructor(id, titulo, completada, fechaCreada) {
        this.id = id;
        this.titulo = titulo;
        this.completada = completada;
        this.fechaCreada = fechaCreada;
    }

    complete() {
        return this.completada == true;
    }
}
