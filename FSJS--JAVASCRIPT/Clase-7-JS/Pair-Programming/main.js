let agenda = [];
var agregarUser = (agenda) => {
    let usuarios = [];
    usuarios.push(prompt("Ingresar DNI: "));
    if (agenda.length != 0) {
        let flag = buscarXDni(agenda, usuarios[0]);
        if (flag != -1) {
            alert("El dni: " + usuarios[0] + " ya existe");
        } else {
            usuarios.push(prompt("Ingresar Nombre: "));
            usuarios.push(prompt("Ingresar Apellido: "));
            usuarios.push(prompt("Ingresar Telefono: "));
            agenda.push(usuarios);
        }
    } else {
        usuarios.push(prompt("Ingresar Nombre: "));
        usuarios.push(prompt("Ingresar Apellido: "));
        usuarios.push(prompt("Ingresar Telefono: "));
        agenda.push(usuarios);
    }
};

var buscarXDni = (agenda, dni) => {
    let pos = -1;
    agenda.forEach((usuario) => {
        if (usuario[0] == dni) {
            pos = agenda.indexOf(usuario);
        }
    });
    return pos;
};

var eliminarUser = (agenda, posicion) => {
    agenda.splice(posicion, 1);
};

let op;
do {
    op = prompt("Ingrese una Opción: \n1. Agregar\n2. Eliminar x dni\n3. Mostrar x dni\n4. Mostrar toda la agenda\n0. Salir");
    switch (op) {
        case "1":
            agregarUser(agenda);
            alert("Usuario Ingresado");
            break;
        case "2":
            let dni2 = prompt("Ingrese el dni de la persona a eliminar");
            eliminarUser(agenda, buscarXDni(agenda, dni2));
            alert("Usuario eliminado");
            break;
        case "3":
            let dni = prompt("Ingrese el dni de la persona a mostrar");
            let pos = buscarXDni(agenda, dni);
            alert(agenda[pos]);
            break;
        case "4":
            mostrarAgenda(agenda);
            break;
        case "0":
            alert("Adios!!");
            break;
        default:
            alert("ERROR - Ingresaste datos incorrectos");
            break;
    }
} while (op != "0");

function mostrarAgenda(agenda) {
    let string = "";
    agenda.forEach((element, index) => {
        string += "[" + index + "] " + element + "\n";
    });
    alert(string);
}
