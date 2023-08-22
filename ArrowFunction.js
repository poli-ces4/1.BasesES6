const saludar = function (nombre) {
  return `Hola ${nombre} como estas?`;
};

console.log(saludar("Pedro"));

const saludarNew = (nombre) => {
  return `Hola ${nombre} como estas?`;
};

console.log(saludarNew("maria"));

const calcular = (valor1, valor2) => valor1 + valor2;

console.log(calcular(10, 20));
