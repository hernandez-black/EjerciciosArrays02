function convertirACadena(texto) {
    return texto.split(' ');
  }

  const miCadena = "Hola mundo, este es un ejemplo";
  const arregloDePalabras = convertirACadena(miCadena);
  console.log(arregloDePalabras);