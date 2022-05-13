const prompt = require ("prompt-sync")({sigint:true});

//Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
//sueldo mensual como parámetro.
//PD: considerá que tu mes de trabajo tiene 40 horas.

let valorSegunMes = sueldoMensual => sueldoMensual / 40;
let sueldoMensual=prompt("Ingrese su sueldo mensual para calcular en que valor se cotiza su hora de trabajo: ");
console.log("Su hora de trabajo esta valuada en $" + valorSegunMes(sueldoMensual));