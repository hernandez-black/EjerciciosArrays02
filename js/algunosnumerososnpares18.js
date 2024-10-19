function hayAlgunNumeroPar(numeros) {
    return numeros.some(numero => numero % 2 === 0);
  }
  const miArreglo = [3, 5, 7, 9, 12];
  
  const hayPar = hayAlgunNumeroPar(miArreglo);
  
  if (hayPar) {
    console.log("Hay al menos un número par en el arreglo.");
  } else {
    console.log("No hay ningún número par en el arreglo.");
  }