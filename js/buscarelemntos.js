function existeEnArreglo(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === valor) {
        return true;
      }
    }
    return false;
  }


let buscar=["yazmin","bryan","alondra","luz"]

console.log(existeEnArreglo(buscar, "yazmin"));
console.log(existeEnArreglo(buscar, 'uva'))