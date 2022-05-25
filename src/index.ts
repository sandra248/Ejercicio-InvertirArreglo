let dimensionArreglo: number = Number(prompt("Ingrese el tamaño del arreglo"));
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Indique el numero que va en la posicion ${indice}:`)
  );
}

for (indice = arreglo.length - 1; indice >= 0; indice--) {
  console.log(`El numero en la posicion ${indice} es: ${arreglo[indice]}`);
}
