"use strict";
// Variables y Tipos de Datos:
// Declara variables de los siguientes tipos: string, number, boolean, array de números. Asigna valores a estas variables.
const numero = 5;
const cadena = "Hola";
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numero);
console.log(cadena);
console.log(numeros);
// Funciones:
// Define una función llamada sumar que tome dos parámetros numéricos y devuelva la suma de esos números.
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 15));
// Condicionales y Ciclos:
// Utiliza un condicional para determinar si un número es par o impar. Imprime un mensaje apropiado en cada caso.
// Utiliza un ciclo for para imprimir los números del 1 al 5 en la consola.
const num = 10;
if (num % 2 === 0) {
    console.log("Es par");
}
else {
    console.log("Es impar");
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
const Persona = {
    nombre: "Juancho",
    edad: 26,
    email: "juancho@mail.com",
};
console.log(Persona);
// Clases:
// Define una clase llamada Punto que tenga propiedades x e y. Crea un objeto utilizando esta clase y asigna valores a las propiedades.
class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const punto = new Punto(34.4, 65.8);
console.log(`Coordenada X ${punto.x}, Coordenada Y ${punto.y}`);
