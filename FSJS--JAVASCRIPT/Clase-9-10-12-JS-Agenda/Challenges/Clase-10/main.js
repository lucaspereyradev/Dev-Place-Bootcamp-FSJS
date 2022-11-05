class PersonasAcademia {
    nombre;
    apellido;
    id;
    estadoCivil;

    constructor(nombre, apellido, id, estadoCivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
        this.estadoCivil = estadoCivil;
    }

    cambiarEstadoCivil(estadoCivil) {
        return (this.estadoCivil = estadoCivil);
    }
}

class Empleados extends PersonasAcademia {
    fechaIncorporacion;
    numDespacho;

    constructor(nombre, apellido, id, estadoCivil, fechaIncorporacion, numDespacho) {
        super(nombre, apellido, id, estadoCivil);
        this.fechaIncorporacion = fechaIncorporacion;
        this.numDespacho = numDespacho;
    }

    reasignarDespacho(numDespacho) {
        return (this.numDespacho = numDespacho);
    }
}

class Profesores extends Empleados {
    departamento;

    constructor(nombre, apellido, id, estadoCivil, fechaIncorporacion, numDespacho, departamento) {
        super(nombre, apellido, id, estadoCivil, fechaIncorporacion, numDespacho);
        this.departamento = departamento;
    }

    cambiarDepartamento(departamento) {
        return (this.departamento = departamento);
    }
}

class PersonalDeServicio extends Empleados {
    seccion;

    constructor(nombre, apellido, id, estadoCivil, fechaIncorporacion, numDespacho, seccion) {
        super(nombre, apellido, id, estadoCivil, fechaIncorporacion, numDespacho);
        this.seccion = seccion;
    }

    cambiarSeccion(seccion) {
        return (this.seccion = seccion);
    }
}

class Estudiantes extends PersonasAcademia {
    curso;

    constructor(nombre, apellido, id, estadoCivil, curso) {
        super(nombre, apellido, id, estadoCivil);
        this.curso = curso;
    }

    matricularNuevoCurso(curso) {
        return (this.curso += ", " + curso);
    }
}

let profesores = [];
let personalServicio = [];
let estudiantes = [];

let profesor = new Profesores("Raul", "Gimenez", 1, "Casado", 2001, 5, "Java");
let profesor1 = new Profesores("Javier", "Gonzales", 2, "Casado", 2002, 6, "PHP");
let profesor2 = new Profesores("Mercedez", "Sosa", 3, "Soltera", 2004, 7, "Java");
profesor.cambiarDepartamento("Base de Datos");
profesor1.cambiarEstadoCivil("Soltero");
profesores.push(profesor, profesor1);

let personalDeServicio = new PersonalDeServicio("Juan", "Gonzales", 1, "Soltero", 2005, 10, "Biblioteca");
let personalDeServicio1 = new PersonalDeServicio("Gonzalo", "Lopez", 2, "Casado", 2005, 11, "Decano");
let personalDeServicio2 = new PersonalDeServicio("Marcelo", "Perez", 3, "Soltero", 2005, 12, "Secretaria");
personalDeServicio1.cambiarSeccion("Presidente");
personalServicio.push(personalDeServicio, personalDeServicio1, personalDeServicio2);

let estudiante = new Estudiantes("Pepe", "Pantita", 1, "Soltero", "Java");
let estudiante1 = new Estudiantes("Carlos", "Lukaku", 2, "Soltero", "PHP");
estudiante.matricularNuevoCurso("Base de Datos");
estudiantes.push(estudiante, estudiante1);

console.table(profesores);
console.table(personalServicio);
console.table(estudiantes);
