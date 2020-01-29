/*

Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: nada.
*/

/*
sin comillas hace operaciones matematicas, con comillas no realiza ninguna operacion con lo que se introduce
*/
for (var i=1; i<= 3; i++) {
function calculo(operacion, valor1, valor2){
	if(operacion == "+")
	{total = valor1 + valor2;}
	else if (operacion == "-")
	{total = valor1 - valor2;}
	else if (operacion == "*")
	{total = valor1 * valor2;}
	else if (operacion == "/")
	{total = valor1 / valor2;}
	else {total = "syntax error"}
}


var in1;
in1 = prompt("Primer numero?");
var valor1;
valor1 = parseFloat(in1);
var in2;
in2 = prompt("Segundo numero?");
var valor2;
valor2 = parseFloat(in2);
var operacion;
operacion = prompt("Que operacion vas a realizar?");
var funcion = calculo(operacion, valor1, valor2);
document.write("El resultado es:");
document.write(total);
document.write('</br>');
}