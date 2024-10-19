function sumararreglo(arre){
    return arre.reduce((acomulador, actual) => acomulador + actual,0);
}

let numeros=[10, 6, 8, 90];
console.log(sumararreglo(numeros));