const prompt = require ("prompt-sync")({sigint:true});

//Crear una función que convierta pulgadas en centímetros.
//Recibe por parámetro pulgadas y retorna su equivalente en centímetros.


 let pulgadasACm = pulgadas => pulgadas * 2.54;
 let pulgadas=prompt("Ingrese pulgadas:");
 console.log("Las pulgadas son " + pulgadasACm(pulgadas));
