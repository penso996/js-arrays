const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3];
console.log("La costante fourthTeacher dovrebbe essere Phil: " + fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers[4] = "Patrick";
console.log("Il quinto indice nell'array ora dovrebbe essere Patrick: " + teachers[4]);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop();
console.log("La costante lastTeacher dovrebbe essere Luca: " + lastTeacher);
  // Verifica che l'ultimo elemento dell'array non sia più 'Luca' ma 'Lewis'
  console.log("L'ultimo indice nell'array ora dovrebbe essere Lewis: " + teachers[teachers.length - 1]);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift();
console.log("La costante firstTeacher dovrebbe essere Nathan: " + firstTeacher);
  //Verifica che il primo elemento dell'array non sia più 'Nathan' ma 'Ed'
  console.log("Il primo indice nell'array ora dovrebbe essere Ed: " + teachers[0]);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push("Vanessa");
console.log("L'ultimo indice nell'array ora dovrebbe essere Vanessa: " + teachers[teachers.length - 1]);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift("Sara");
console.log("Il primo indice nell'array ora dovrebbe essere Sara: " + teachers[0]);

// 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf("Lewis");
console.log("L'indice di Lewis nell'array dovrebbe essere 5: " + lewisIndex);

// 8. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
const isTeachersEmpty = teachers.length === 0;
console.log("Verifica se l'array è vuoto, non dovrebbe esserlo: " + isTeachersEmpty);