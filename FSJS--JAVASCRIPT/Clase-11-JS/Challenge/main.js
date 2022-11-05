// Utilidad Sort

let usuarios = [];

usuarios.push({ email: "hola1@gmail.com" });
usuarios.push({ email: "hola0@gmail.com" });
usuarios.push({ email: "hola2@gmail.com" });
usuarios.push({ email: "hola1@gmail.com" });
usuarios.sort(function (a, b) {
    if (a.email < b.email) return -1;
    else if (a.email > b.email) return 1;
    else return 0;
});

console.log(usuarios.sort());
