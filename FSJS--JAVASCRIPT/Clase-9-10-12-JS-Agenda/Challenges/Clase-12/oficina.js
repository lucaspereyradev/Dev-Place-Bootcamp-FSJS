let _singleton = null;

class Empresa {
    constructor(nombreOficina, cantEmpleados) {
        if (!_singleton) {
            this.nombreOficina = nombreOficina;
            this.cantEmpleados = cantEmpleados;
            _singleton = this;
        } else return _singleton;
        console.log("Oficina creada");
    }

    getOficina() {
        return this.nombreOficina;
    }

    getCantEmpleados() {
        return this.cantEmpleados;
    }
}

function init_Oficina() {
    let oficina = new Empresa("Oficina 1", 44);
    let oficina1 = new Empresa("Oficina 2", 31);
    console.log(oficina.getOficina());
    console.log(oficina1.getOficina());
    console.log(oficina.getCantEmpleados());
    console.log(oficina1.getCantEmpleados());
    console.log(oficina instanceof Empresa);
    console.log(oficina1 instanceof Empresa);
    console.log(oficina === oficina1);
}

init_Oficina();
