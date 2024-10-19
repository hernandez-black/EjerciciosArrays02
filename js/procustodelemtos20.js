function calcularProducto(numeros) {
    return numeros.reduce((productoAcumulado, numero) => {
      return productoAcumulado * numero;
    }, 1); 
  }

  const miArreglo = [2, 3, 4, 5];
  const resultado = calcularProducto(miArreglo);
  console.log(resultado);