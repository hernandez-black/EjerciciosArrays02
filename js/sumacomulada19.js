const numeros = [1, 2, 3, 4, 5];

const sumaTotal = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log(sumaTotal);