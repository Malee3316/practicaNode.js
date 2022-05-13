const prompt = require ("prompt-sync")({sigint:true});

//Crear una función que recibe un string y devuelve la misma frase pero con
//admiración.

let texto = prompt("Ingrese texto para sumarle admiracion: "  );

let admiracion = function (texto){
    return texto + "!!!!!"
}

console.log(admiracion(texto));