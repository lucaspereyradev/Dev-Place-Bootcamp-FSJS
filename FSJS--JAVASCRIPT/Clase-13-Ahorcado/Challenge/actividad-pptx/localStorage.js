class Personas {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

let persona = new Personas("Lucas", "Pereyra", 19);
let json = JSON.stringify(persona); // Transformo la class "Personas" a JSON.

// localStorage.setItem("nombre", Personas.nombre);
// localStorage.setItem("apellido", Personas.apellido);
// localStorage.setItem("edad", Personas.edad);

localStorage.setItem("persona", json);
