const arrayConValores = [0, "", "hola", false, 42, null, undefined];

const arraySinFalsy = arrayConValores.filter(valor => !!valor);

console.log(arraySinFalsy);