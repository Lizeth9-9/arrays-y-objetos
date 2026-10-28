// 1. Obtener el primer elemento del array //

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros[0]);

//   2. Obtener el último elemento del array  //

console.log(numeros[8]);

//  3. Agregar un elemento al inicio del array  //

numeros.unshift(10);
console.log(numeros);

//  4. Eliminar el primer elemento del array   //

let Eliminar = numeros.shift();
console.log(numeros);

// // 5. Agregar un elemento al final del array   //

let agregar = numeros.push(50);
console.log(numeros);

// // 6. Eliminar el último elemento del array   //

let Elimina = numeros.pop();
console.log(numeros);

// 7. Combinar dos arrays  //

const letras = ["a", "b", "c", "d"];
let mezcla = numeros.concat(letras);
console.log(mezcla);

// 8. Encontrar si un array incluye un elemento   //
let verificar = console.log(letras.includes("g"));

// 9. Buscar el índice de un elemento  //
let elemento = "c";
let buscar = console.log(letras.indexOf(elemento));

//  10. Reemplazar un elemento en un array   //

let reemplazo = console.log((letras[3] = 80));
console.log(letras);

// 11. Sumar todos los elementos del array    //
let suma = numeros.reduce(function (acumulador, num) {
    return acumulador + num;
}, 0);
console.log(suma);

// 12. Multiplicar todos los elementos del array     //
let multiplicar = numeros.map(function (nu) {
    return nu * 2;
});
console.log(multiplicar);

//  13. Filtrar números mayores a un valor //

let valor = 8;
let filtar = numeros.filter(function (num) {
    return num > valor;
});
console.log(filtar);

// 14. Verificar si todos los elementos son mayores a un número  //

let valor1 = 1;
let verifica = numeros.every(function (num) {
    return num >= valor1;
});
console.log(verifica);

// 15. Obtener el primer elemento que cumple una condición //
let valor2 = 4;
let encuentra = numeros.find(function (num) {
    return num > valor2;
});
console.log(encuentra);

// 16. Imprimir cada elemento del array //

numeros.forEach(function (e) {
    console.log(e);
});

// 17. Crear un array con el doble de cada número  //

let doble = numeros.map(function (num) {
    return num * 2;
});
console.log(doble);

// 18. Convertir un array de nombres en mayúsculas  //
let abecedario = ["ana", "pepe"]

let mayuscula = abecedario.map(function (elemento1) {
    return elemento1.toUpperCase();
});
console.log(mayuscula);