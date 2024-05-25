// Variables y Tipos de Datos:
// Declara variables de los siguientes tipos: string, number, boolean, array de números. Asigna valores a estas variables.
const numero: Number = 5;
const cadena: string = "Hola";
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numero);
console.log(cadena);
console.log(numeros);

// Funciones:
// Define una función llamada sumar que tome dos parámetros numéricos y devuelva la suma de esos números.
function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(10, 15));
// Condicionales y Ciclos:
// Utiliza un condicional para determinar si un número es par o impar. Imprime un mensaje apropiado en cada caso.
// Utiliza un ciclo for para imprimir los números del 1 al 5 en la consola.
const num: number = 10;
if (num % 2 === 0) {
  console.log("Es par");
} else {
  console.log("Es impar");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Interfaces y Objetos:
// Define una interfaz llamada Persona que tenga propiedades nombre y edad. Crea un objeto utilizando esta interfaz y asigna valores a las propiedades.
// Opcional: Agrega una propiedad email opcional a la interfaz Persona.

interface IPersona {
  nombre: string;
  edad: number;
}

interface IPersona {
  email: string;
}
const Persona: IPersona = {
  nombre: "Juancho",
  edad: 26,
  email: "juancho@mail.com",
};

console.log(Persona);

// Clases:
// Define una clase llamada Punto que tenga propiedades x e y. Crea un objeto utilizando esta clase y asigna valores a las propiedades.

class Punto {
  constructor(public x: number, public y: number) {}
}

const punto: Punto = new Punto(34.4, 65.8);

console.log(`Coordenada X ${punto.x}, Coordenada Y ${punto.y}`);
