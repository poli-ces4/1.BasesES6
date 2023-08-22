/**
 * Function Declaration (nombradas)
 */
function jugar(valor = 10) {
  return valor * 1000;
}
console.log(jugar(50));

/**
 * Function Expression (anonimas)
 */

const resultado = function (valor = 10) {
  return valor * 1000;
};

console.log(resultado(50));
