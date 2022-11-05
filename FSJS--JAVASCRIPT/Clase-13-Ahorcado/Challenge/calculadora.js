/* Realizar un programa que simule una calculadora, donde realice las operaciones básicas (suma, resta, multiplicación, división), el usuario debe primero ingresar dos valores, y especificar con un carácter la operación a realizar, para el uso del ejercicio debe usar la sentencia switch.
 */

let n1 = parseInt(prompt("Ingrese un numero: "));
let operacion = prompt("Ingrese su operacion: \n Suma: + \n Resta: - \n División: / \n Multicación: *");
let n2 = parseInt(prompt("Ingrese otro numero: "));
let resultado;

switch (operacion) {
    case "+":
        resultado = n1 + n2;
        break;
    case "-":
        resultado = n1 - n2;
        break;
    case "/":
        resultado = n1 / n2;
        break;
    case "*":
        resultado = n1 * n2;
        break;
    default:
        alert("Operacion incorrecta: " + operacion);
        break;
}

alert("Resultado: " + resultado);
