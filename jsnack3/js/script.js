//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

//CHIEDI UN NUMERO ALL'UTENTE
const n = prompt("dimmi un numero");

for (let i = 1; i <= n; i++) {
  const cubes = Math.pow(i, 3);
  console.log(cubes);
}