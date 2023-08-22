const estudiante = { nombre: "Juan", apellido: "Perez", edad: 15 };
//ES5
//const nombre = estudiante.nombre;
//const edad = estudiante.edad;
//console.log(nombre);

//ES6
const { nombre, edad } = estudiante;
console.log(nombre);

const jugadores = ["Messi", "Ronaldo", "Neymar"];
const [, player1, player2] = jugadores;
console.log(player1);
console.log(player2);

let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
