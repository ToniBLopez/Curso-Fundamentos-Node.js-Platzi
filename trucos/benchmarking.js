// Con estas pruebas demuestro que .time y .timeEnd no es de fiar:

let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle')

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2')

// Respuesta:

// Tiempo bucle: 0.268ms
// Tiempo bucle 2: 0.055ms



let suma = 0;
let suma2 = 0;

console.time('Tiempo bucle 2');
for (let j = 0; j < 1000; j++) {
    suma2 = suma2 + j;
}
console.timeEnd('Tiempo bucle 2')

console.time('Tiempo bucle');
for (let i = 0; i < 1000; i++) {
    suma++;
}
console.timeEnd('Tiempo bucle')

// Respuesta:

// Tiempo bucle: 0.268ms
// Tiempo bucle 2: 0.055ms