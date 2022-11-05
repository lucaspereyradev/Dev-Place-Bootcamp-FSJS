const tablaUsuario = document.getElementById("tabla-usuarios");
const btnEnviar = document.getElementById("btn-enviar");
const btnBuscar = document.getElementById("btn-buscar");
const btnEditar = document.getElementById("btn-editar");

const form = document.getElementById("formulario");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
});

class Agenda {
    listaUsuarios;
    constructor() {
        this.listaUsuarios = [];
    }

    agregarUser(dni, nombre, apellido, telefono) {
        if (this.listaUsuarios.length != 0) {
            let flag = this.buscarXDni(dni);
            if (flag != -1) {
                alert("El dni: " + dni + " ya existe");
            } else {
                this.crearUnUsuario(dni, nombre, apellido, telefono);
            }
        } else {
            this.crearUnUsuario(dni, nombre, apellido, telefono);
        }
    }
    crearUnUsuario(dni, nombre, apellido, telefono) {
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
        tablaUsuario.innerHTML = "";
        crearTabla();
    }

    editarUser(posicion) {
        this.listaUsuarios[posicion].dni = document.getElementById("dni-editado").value;
        this.listaUsuarios[posicion].nombre = document.getElementById("nombre-editado").value;
        this.listaUsuarios[posicion].apellido = document.getElementById("apellido-editado").value;
        this.listaUsuarios[posicion].telefono = document.getElementById("telefono-editado").value;
        tablaUsuario.innerHTML = "";
        crearTabla();
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
}

var agenda = new Agenda();

btnEnviar.addEventListener("click", obtenerDatos);

function obtenerDatos() {
    let dni = document.getElementById("inputDni").value;
    let nombre = document.getElementById("inputName").value;
    let telefono = document.getElementById("inputPhone").value;
    let apellido = document.getElementById("inputLastName").value;

    if (dni != 0 && nombre.length != 0 && apellido.length != 0 && telefono.length != 0) {
        agenda.agregarUser(dni, nombre, apellido, telefono);
        tablaUsuario.innerHTML = "";
        crearTabla();
    }
}
function crearTabla() {
    let tableData;
    agenda.listaUsuarios.forEach((element, index) => {
        tableData = `
        <tr id="row-${index}">
            <td>${element.dni}</td>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.telefono}</td>
            <td>
                <button class="btn btn-warning" id="btn-editar" onclick=tablaEditar(${index})>Editar</button>
                <button class="btn btn-danger" onclick=agenda.eliminarUser(${index})>Borrar</button>
            </td>
       </tr>
        `;
        tablaUsuario.innerHTML += tableData;
    });
}

function tablaEditar(index) {
    tablaUsuario.innerHTML = "";
    agenda.listaUsuarios.forEach((element, pos) => {
        if (parseInt(pos) == parseInt(index)) {
            tablaUsuario.innerHTML += `
        <tr>
            <td><input type="text" id="dni-editado" value="${agenda.listaUsuarios[index].dni}"/></td>
            <td><input type="text" id="nombre-editado"  value="${agenda.listaUsuarios[index].nombre}"/></td>
            <td><input type="text" id="apellido-editado" value="${agenda.listaUsuarios[index].apellido}"/></td>
            <td><input type="text" id="telefono-editado" value="${agenda.listaUsuarios[index].telefono}"/></td>
            <td>
                <button class="btn btn-success" onclick=agenda.editarUser(${index})>Guardar</button>
                <button class="btn btn-danger" onclick=agenda.eliminarUser(${index})>Borrar</button>
            </td>
       </tr>
    `;
        } else {
            tablaUsuario.innerHTML += `
        <tr>
            <td>${element.dni}</td>
            <td>${element.nombre}</td>
            <td>${element.apellido}</td>
            <td>${element.telefono}</td>
            <td>
                <button class="btn btn-warning" id="btn-editar" onclick=tablaEditar(${index})>Editar</button>
                <button class="btn btn-danger" onclick=agenda.eliminarUser(${index})>Borrar</button>
            </td>
       </tr>
        `;
        }
    });
}

btnBuscar.addEventListener("click", mostrarxDni);

function mostrarxDni() {
    let dni = document.getElementById("id-buscar").value;
    let pos = parseInt(agenda.buscarXDni(dni));
    if (!dni) {
        tablaUsuario.innerHTML = "";
        crearTabla();
    } else {
        tablaUsuario.innerHTML = "";
        tablaUsuario.innerHTML = `
        <tr>
            <td>${agenda.listaUsuarios[pos].dni}</td>
            <td>${agenda.listaUsuarios[pos].nombre}</td>
            <td>${agenda.listaUsuarios[pos].apellido}</td>
            <td>${agenda.listaUsuarios[pos].telefono}</td>
            <td>
                <button class="btn btn-warning" id="btn-editar" onclick=tablaEditar(${pos})>Editar</button>
                <button class="btn btn-danger" onclick=agenda.eliminarUser(${pos})>Borrar</button>
            </td>
       </tr>
    `;
    }
}
