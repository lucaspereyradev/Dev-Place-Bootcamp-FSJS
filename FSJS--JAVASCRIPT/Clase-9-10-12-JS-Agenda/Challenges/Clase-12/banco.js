class Banco {
    constructor(cuentaCorriente, cuentaAhorro, seguroDeVida, seguroHogar) {
        this.cuentaCorriente = cuentaCorriente;
        this.cuentaAhorro = cuentaAhorro;
        this.seguroDeVida = seguroDeVida;
        this.seguroHogar = seguroHogar;
    }

    clone() {
        return new Banco(this.cuentaCorriente, this.cuentaAhorro, this.seguroDeVida, this.seguroHogar);
    }
}

let usuario = new Banco(123, 123, 123, 123);
let usuarioCopy = usuario.clone();

console.log(usuario);
console.log(usuarioCopy);
