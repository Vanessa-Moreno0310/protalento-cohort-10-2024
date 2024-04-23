console.log("Saludos desde 03-repaso/script.js");

// Arreglos

// Tipos de datos
let numeros = 1;
let strings = "hola";
let booleanos = true; // false
let objeto = {
  nombre: "José Antonio",
  cohorte: 10
}

let arreglo = [1, 2, 3, 4, 5];

// Añadir más elementos a un arreglo al final
arreglo.push(6);

// Añadir mas elementos a un arreglo al principio
arreglo.unshift(0);

// Un arreglo puede tener cualquier tipo de valor dentro

arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Arreglo de numeros
arreglo = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0 ,1]; // Arreglo de negativos
arreglo = [ 0.1, 0.0002, Infinity, Math.sqrt(-1) ];
arreglo = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]; // Arreglo de strings
arreglo = ["hola", 1, true, ["a", "b", "c"], { nombre: "José Antonio", cohorte: 10 }]; // Arreglo de distintos tipos de datos

const db_alumnos = [{
  nombre: "José Antonio",
  cohorte: 10,
  calificaciones: [8.9, 10, 9.0, 9.5]
},
{
  nombre: "Luis",
  cohorte: 10,
  calificaciones: [8.9, 10, 9.0, 9.5]
},
{
  nombre: "Ana",
  cohorte: 10,
  calificaciones: [8.9, 10, 9.0, 9.5]
},
{
  nombre: "Carlos",
  cohorte: 10,
  calificaciones: [8.9, 10, 9.0, 9.5]
},{
  nombre: "Marta",
  cohorte: 10,
  calificaciones: [8.9, 10, 9.0, 9.5]
}];

// db_alumnos.length = 5
for(let i = 0; i < db_alumnos.length; i++) {
  console.log("---Alumno---")
  console.log(`Iteracion: ${i}`)
  console.log(db_alumnos[i]) // 4
  console.log(`Calificaciones del alumno: ${db_alumnos[i].nombre}`);
  let calificaciones = db_alumnos[i].calificaciones;
  for(let j = 0; j < calificaciones.length; j++) {
    console.log(`Calificación ${j}: ${calificaciones[j]}`)
  }
  console.log("------------")
}

// Diferencia entre comillas

let nombre = "José";
let s = "Mi nombre es: ${nombre}";
console.log(s);

s = 'Mi nombre es: ${nombre}';
console.log(s)

s = "Mi nombre es: '${nombre}'";
console.log(s);

s = 'Mi nombre es: "${nombre}"';
console.log(s);

s = `Mi nombre es: ${nombre}`;
console.log(s);

s = `El resultado de 1 + 2 + 3 es: ${1 + 2 + 3}`;
console.log(s);

s = `Codigo complejo: ${
  [1,2,3,4,5].map(el => {
    return el * el
  }) 
}`;
console.log(s);

s = `Mi nombre es: ${nombre}`;
console.log(s);

// Ejemplo con While
// While es más libre que el for

let aleatorio = Math.random()
while(aleatorio < 0.5) {
  aleatorio = Math.random()
  console.log(aleatorio)
}