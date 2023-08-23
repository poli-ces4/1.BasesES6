import Animal from "./Animal.js";
import validaToken, { API_KEY, PERFILES } from "./helper.js";
//import validaToken, * as helpers from "./helper.js";

const animal = new Animal("Tigre");
console.log(animal.print());
console.log(API_KEY);
console.log(PERFILES[0]);
console.log(validaToken());
