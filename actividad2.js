const prompt = require ("prompt-sync")({sigint:true});

//Crear una función que recibe un string y lo convierte en una URL.

let nombreurl = prompt("Ingrese texto a transformar en url: "  );

let transformarUrl = function (nombreurl){
    return "http://www." + nombreurl + ".com" ;
}




console.log("Tu url es: " + transformarUrl(nombreurl));






