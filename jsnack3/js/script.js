//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

//CHIEDI UN NUMERO ALL'UTENTE
const n = prompt("dimmi un numero");

let numbers = [];

for (let i = 0; i < n; i++) {
  const cubes = Math.pow([numbers], 3);
  console.log(cubes);
  numbers++;
}