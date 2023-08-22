//scope(ambito)
//Redefinir
// ()que
// {}como
//Tipos ambito JS
//Global
//Function
//Bloque

function explicarVar() {
  var edad = 10;
  edad = 30;
  if (true) {
    var edad = 50;
    console.log(edad);
  }
  console.log(edad);
}
explicarVar();

function explicarLet() {
  let puntaje = 10;
  puntaje = 30;
  if (true) {
    let puntaje = 50;
    console.log(puntaje);
  }
  console.log(puntaje);
}
explicarLet();

function explicarConst() {
  const PI = 10;
  const jugador = { name: "10", saludar: function () {} };
  const notas = [10, 20, 30];
  jugador.age = 20;
  notas.push(40);
  //PI = 30;
  if (true) {
    const PI = 50;
    console.log(PI);
  }
  console.log(PI);
  console.log(jugador);

  console.log(notas);
}
explicarConst();
