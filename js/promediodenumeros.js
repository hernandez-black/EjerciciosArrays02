function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  const miArreglo = [10, 10, 8, 9, 5];
  const promedio = calcularPromedio(miArreglo);
  console.log(promedio);