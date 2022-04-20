//Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const firstNames = ["Paolo", "Luca", "Maria", "Sofia", "Lara", "Massimo"];
const lastNames = ["Bianchi", "Rossi", "Barcella", "Bellenghi", "Forni", "Crovetto"]

for (let i = 0; i < 3; i++) {
  const randomFirstNameIndex = (Math.floor(Math.random()*firstNames.length));
  const randomFirstName = firstNames[randomFirstNameIndex];

  const randomLastNameIndex = (Math.floor(Math.random()*lastNames.length));
  const randomLastName = lastNames[randomLastNameIndex];

  const randomGuest = randomFirstName + " " + randomLastName;
  console.log(randomGuest);
}