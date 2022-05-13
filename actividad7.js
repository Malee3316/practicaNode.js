const prompt = require ("prompt-sync")({sigint:true});

//Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
//y lo retorne.

let stringMinuscula = prompt("Ingrese texto en minuscula a transformar en mayuscula: ");

let transformaString = stringMinuscula => stringMinuscula.toUpperCase();

console.log(transformaString(stringMinuscula));