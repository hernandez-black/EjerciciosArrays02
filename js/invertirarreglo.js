function invertirArreglo(numeros) {
  let numerosInvertidos = [];
  for (let i = numeros.length - 1; i >= 0; i--) {
    numerosInvertidos.push(numeros[i]);
  }
  return numerosInvertidos;
}

let numeros = [1, 2, 3, 4, 5];
let numerosInvertidos = invertirArreglo(numeros);
console.log(numerosInvertidos);