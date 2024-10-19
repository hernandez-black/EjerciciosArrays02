function mayorNumerp(mayor) {
    return Math.max(...mayor);
}


let numeros1= [10, 15, 1, 9, 20];
let mayorNum= mayorNumerp(numeros1);
console.log(mayorNum);