const prompt = require ("prompt-sync")({sigint:true});


let UsuarioFrase = prompt("Ingresa una frase: ");

console.log(UsuarioFrase);

let usuarioNombre = prompt("Ingresa tu nombre: ");

console.log("hola " + usuarioNombre + " !!!")

let sumar = (numero1, numero2) => numero1 + numero2; 
let numero1 = parseInt(prompt("Ingrese primer numero a sumar: "));
let numero2 = parseInt(prompt("Ingrese segundo numero a sumar: "));

console.log(sumar(numero1, numero2));

let edadDelUsuario = (anioActual, anioDeNacimiento) => anioActual - anioDeNacimiento;
let anioActual = parseInt(prompt("Ingrese el anio en el cual nos encontramos: "));
let anioDeNacimiento = parseInt(prompt("Ingrese el anio de su nacimiento: "));

console.log("Tienes " + edadDelUsuario(anioActual,anioDeNacimiento) + " anios");