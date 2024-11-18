export default function taskBlock(trueOrFalse) {
  const task = false; // Usamos const porque su valor no cambia
  const task2 = true; // Usamos const porque su valor no cambia

  if (trueOrFalse) {
    let task = true; // Usamos let para limitar su alcance al bloque if
    let task2 = false; // Usamos let para limitar su alcance al bloque if
  }

  return [task, task2]; // Retorna los valores originales de las variables fuera del bloque
}
