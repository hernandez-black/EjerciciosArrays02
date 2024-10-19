function todosMayoresQueN(arreglo, N) {
    return arreglo.every(numero => numero > N);
  }
  const numeros = [5, 8, 12, 7];
  const valorN = 4;
  
  const todosMayores = todosMayoresQueN(numeros, valorN);
  
  if (todosMayores) {
    console.log("Todos los números son mayores que", valorN);
  } else {
    console.log("No todos los números son mayores que", valorN);
  }