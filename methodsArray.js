let equipos = ["Nacional", "Medellin"];

for (let i = 0; i < equipos.length; i++) {
  console.log(equipos[i]);
}

equipos.forEach((equipo) => {
  console.log(equipo);
});

/** push- pop - shift son mutables */
equipos.push("Envigado");
console.log(equipos);
equipos.shift();
console.log(equipos);
equipos.pop();
console.log(equipos);

/*inmutables*/
//MAP = recorre, iterar, extraer informacion.

let alumnos = ["Ana", "Juan", "Pedro"];
let concatenar = alumnos.map((nombre) => `${nombre}-`);
console.log(concatenar);
console.log(alumnos);

let productos = [
  { name: "Revista", cost: 10 },
  { name: "Lapicero", cost: 5 },
  { name: "Borrador", cost: 1 },
];

let nombrePdtos = productos.map((producto) => producto.name);
console.log(nombrePdtos);

let pdtosIVA = productos.map((pdto) => {
  return { ...pdto, iva: 19 };
});
console.log(pdtosIVA);

const poli = [
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Medellin",
    graduados: 100,
    desertaron: 10,
    periodo: 2020,
  },
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Rionegro",
    graduados: 50,
    desertaron: 5,
    periodo: 2020,
  },
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Uraba",
    graduados: 30,
    desertaron: 3,
    periodo: 2020,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Medellin",
    graduados: 100,
    desertaron: 10,
    periodo: 2020,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Rionegro",
    graduados: 50,
    desertaron: 5,
    periodo: 2020,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Uraba",
    graduados: 30,
    desertaron: 0,
    periodo: 2020,
  },
];

//Every
const sinDesercion = poli.every((p) => p.desertaron === 0);
console.log(sinDesercion);

//Some
const conDesercion = poli.some((p) => p.desertaron > 0);
console.log(conDesercion);

//Filter
const programaSinDesercion = poli
  .filter((p) => p.desertaron === 0)
  .map((p) => p.nombre);
console.log(programaSinDesercion);

const programasUraba = poli
  .filter((p) => p.ciudad === "Uraba")
  .map((p) => p.nombre);
console.log(programasUraba);

//Reduce
const graduadosRionegro = poli
  .filter((p) => p.ciudad === "Rionegro")
  .reduce((contador, p) => (contador += p.graduados), 0);
console.log(graduadosRionegro);

const consolidado = poli.reduce(
  (prev, act) => {
    return {
      graduados: prev.graduados + act.graduados,
      desertaron: prev.desertaron + act.desertaron,
    };
  },
  { graduados: 0, desertaron: 0 }
);

console.log(consolidado);

const palabras = [
  "Amazon.com, Inc.",
  "es una corporación",
  "estadounidense",
  "de comercio electrónico",
];

const frase = palabras.reduce((palabra, texto) => `${palabra} ${texto}`);

console.log(frase);
