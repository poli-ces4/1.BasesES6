//Callback = es una funcion que se le pasa como parametro
// a otra funcion.

function respuesta(res) {
  console.log(res);
}

function calcular(op1, op2, funcionCallBack) {
  let resp = op1 + op2;
  funcionCallBack(resp);
}

calcular(10, 20, respuesta);

//Promesas: Son un objeto, por naturaleza son asincronas.

let promise = new Promise((res, rej) => {
  let estado = true;
  if (estado) {
    res("Resolvio la promesa");
  } else {
    rej("Se rechazo la promesa");
  }
});

/*
//opcion1
promise
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

//opcion2
promise.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);
*/

//promesa con setTimeout para evidenciar asincronismo
/*
let promesa2 = new Promise((res) => {
  console.log("Inicio promesa2");
  setTimeout(() => {
    res("Resolvio la promesa2");
  }, 3000);
  console.log("Fin promesa2");
});
*/
//promesa2.then((valor) => console.log(valor));

//async = indicar a una funcion que regresa una promesa
//await = esperar el resultado de una promesa

async function funcionConAsync() {
  return "Ejemplo con async";
}

funcionConAsync().then((x) => console.log(x));

async function funcionAsynAwait() {
  console.log("Inicio");
  let promesa3 = new Promise((res) => {
    setTimeout(() => {
      res("Resolvio la promesa3");
    }, 3000);
  });
  console.log(await promesa3);
  console.log("Fin");
}
funcionAsynAwait();
