function estaVacio(array) {
    if (array === undefined || array === null) {
      return true;
    }
    for (const elemento of array) {
      return false;
    }
    return true;
}

const arrayVacio = [];
const arrayConElementos = [1, 2, 3];

console.log(estaVacio(arrayVacio));
console.log(estaVacio(arrayConElementos));
console.log(estaVacio(undefined));
console.log(estaVacio(null));