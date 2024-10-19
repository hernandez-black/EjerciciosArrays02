function multiplicapordos(arreglo){
    const nuevoarreglo=arreglo.map(numerosaa => numerosaa*2);
    return nuevoarreglo;
}

let numerosaa=[2,4,8,9,10];
let resultado= multiplicapordos(numerosaa);
console.log(resultado);