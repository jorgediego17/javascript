/*

Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: nada.
*/

/*
sin comillas hace operaciones matematicas, con comillas no realiza ninguna operacion con lo que se introduce
*/


function TipoMedalla(posicion){
	if(posicion == 1)
	{medalla = "Medalla de ouro";}
	else if (posicion == 2)
	{medalla = "Medalla de prata";}
	else if (posicion == 3)
	{medalla = "Medalla de bronce";}
	else { medalla = "Mala sorte, outra vez será";}
}
var posicion = prompt("En que posto quedaches?");
posicion = parseFloat(posicion);

var funcionaza = TipoMedalla(posicion);
document.write(posicion + "º");
document.write(medalla);