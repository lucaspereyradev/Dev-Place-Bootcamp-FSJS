let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];

numeros.forEach((element) => {
    if (element > 10) {
        console.log(element);
    }
});

function mayorQue(n) {
    return (m) => m > n;
}
let mayorQue10 = mayorQue(10);
console.log(mayorQue10(11));
