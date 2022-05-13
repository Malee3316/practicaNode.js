const prompt = require ("prompt-sync")({sigint:true});

//Crear la función calculadorIMC() que reciba la altura en metros y el peso en
//kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
//probando diferentes valores.

let altura = prompt("Ingrese su altura en metros: "  );
let peso = prompt("Ingrese su peso en kilogramos: "  );

let calculadorIMC = function(altura, peso){
    return peso / (altura * altura);
}

console.log("Su IMC  es: " + calculadorIMC(altura, peso));