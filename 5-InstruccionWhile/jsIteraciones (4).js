function Mostrar()
{
	var numero = parseInt(prompt("Ingrese numero entre 0 y 10"));
	var i=0;

	while(numero<0 || numero>9 || isNaN(numero))
	{
		numero = parseInt(prompt("ingrese numero entre 0 y 10"));
	}
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN