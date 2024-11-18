export function taskFirst() {
  // Usamos const porque el valor no cambiará
  const task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  // Usamos let porque el valor de la variable será modificado
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}
