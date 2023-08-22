/**
 * Operator Rest (recibir parametros)
 */

function calcularTotal(...datos) {
  let total = 0;
  datos.forEach((dato) => (total += dato));
  return total;
}
console.log(calcularTotal(10, 20, 30, 40, 50, 60, 80, 90, 100, 150));

/**
 * Operator Spread (enviar argumentos)
 */

const deudaBase = 1000;
const deudas = [100, 200, 300, 500];
const totalDeuda = [deudaBase, ...deudas];
console.log(totalDeuda);
const resultado = calcularTotal(...totalDeuda);
console.log(resultado);
