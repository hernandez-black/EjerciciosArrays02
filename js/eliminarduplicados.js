const numerosConDuplicados = [1, 2, 2,2,3, 3, 4, 4, 5,6,6,7];

const numerosUnicos = numerosConDuplicados.filter((item, index) => {
    return numerosConDuplicados.indexOf(item) === index;
});
console.log(numerosUnicos); 