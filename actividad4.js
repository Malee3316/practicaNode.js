const prompt = require ("prompt-sync")({sigint:true});

//Crear una función que calcule la edad de los perros, considerando que 1 año
//para nosotros son 7 de ellos.

let edadDelDoggy = edadHumano => edadHumano * 7;
 let edadHumano=prompt("Ingrese edad del Humano para averiguar cuantos anios perrunos son:");
 console.log(edadDelDoggy(edadHumano));
