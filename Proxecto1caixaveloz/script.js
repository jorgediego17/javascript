/*

Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: nada.
*/

/*
sin comillas hace operaciones matematicas, con comillas no realiza ninguna operacion con lo que se introduce
*/


var producto1;
producto1 = prompt("Precio primer producto?");
var precio1;
precio1 = parseFloat(producto1);
var producto2;
producto2 = prompt("Precio segundo producto?");
var precio2;
precio2 = parseFloat(producto2);
var producto3;
producto3 = prompt("Precio tercer producto?");
var precio3;
precio3 = parseFloat(producto3);
var total = precio1+precio2+precio3;
document.write(total);