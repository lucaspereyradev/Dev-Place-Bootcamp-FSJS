class Agenda {
    listaUsuarios;
    constructor() {
        this.listaUsuarios = [];
    }

    agregarUser() {
        let dni = parseInt(prompt("Ingrese un dni: "));
        if (this.listaUsuarios.length != 0) {
            let flag = this.buscarXDni(dni);
            if (flag != -1) {
                alert("El dni: " + dni + " ya existe");
            } else {
                this.crearUnUsuario(dni);
            }
        } else {
            this.crearUnUsuario(dni);
        }
    }
    crearUnUsuario(dni) {
        let nombre = prompt("Ingrese un nombre: ");
        let apellido = prompt("Ingrese un apellido: ");
        let telefono = parseInt(prompt("Ingrese un numero de telefono"));
        let userAux = new Usuario(dni, nombre, apellido, telefono);
        this.listaUsuarios.push(userAux);
    }
    buscarXDni(dni) {
        let pos = -1;
        this.listaUsuarios.forEach((usuario) => {
            if (usuario.dni === dni) {
                pos = this.listaUsuarios.indexOf(usuario);
            }
        });
        return pos;
    }

    eliminarUser(posicion) {
        this.listaUsuarios.splice(posicion, 1);
    }

    mostrar() {
        let string = "";
        this.listaUsuarios.forEach((usuario, index) => {
            string += "[" + index + "] " + "{\n" + usuario.toString() + "\n}" + "\n";
        });
        return string;
    }
}

class Usuario {
    dni;
    nombre;
    apellido;
    telefono;

    constructor(dni, nombre, apellido, telefono) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
    }

    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }

    getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }
    toString() {
        return (
            "Dni: " + this.dni + "\n" + "Nombre: " + this.nombre + "\n" + "Apellido: " + this.apellido + "\n" + "Telefono: " + this.telefono
        );
    }
}

var agenda = new Agenda();

let op;
do {
    op = prompt("Ingrese una Opción: \n1. Agregar\n2. Eliminar x dni\n3. Mostrar x dni\n4. Mostrar toda la agenda\n0. Salir");
    switch (op) {
        case "1":
            agenda.agregarUser();
            alert("Usuario Ingresado");
            break;
        case "2":
            let dni2 = parseInt(prompt("Ingrese el dni de la persona a eliminar: "));
            agenda.eliminarUser(agenda.buscarXDni(dni2));
            alert("Usuario eliminado");
            break;
        case "3":
            let dni = parseInt(prompt("Ingrese el dni de la persona a mostrar: "));
            let pos = agenda.buscarXDni(dni);
            console.log(pos);
            console.log(agenda.listaUsuarios);
            console.log(agenda.listaUsuarios[pos]);
            console.log(agenda.listaUsuarios[pos].toString());
            alert(agenda.listaUsuarios[pos].toString());
            break;
        case "4":
            alert(agenda.mostrar());
            break;
        case "0":
            alert("Adios!!");
            break;
        default:
            alert("ERROR - Ingresaste datos incorrectos");
            break;
    }
} while (op != "0");

//visual html
const tablaUsuario = document.getElementById("tabla-usuarios"); //agarramos un elemento html por id para meterlo en js
let tableData;
agenda.listaUsuarios.forEach((element) => {
    tableData = ` <tr>
        <td> ${element.dni} </td>
        <td> ${element.nombre} </td>
        <td> ${element.apellido} </td>
        <td> ${element.telefono} </td>
    </tr>
    `;

    tablaUsuario.innerHTML += tableData;
});
