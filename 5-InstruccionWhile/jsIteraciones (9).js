function Mostrar()
{

	var contador=0;
	var numero= parseInt(prompt("Ingrese numero"));
	var respuesta=prompt("¿Desea ingresar otro valor?").toLowerCase();
	var maximo=numero;
	var minimo=numero;

	while(respuesta!='si')
	{
		numero= parseInt(prompt("Ingrese numero"));
	
		if(numero>maximo)
		{
			maximo=numero;
		}
		else if (numero<=minimo)
		{
			minimo=numero;
		}
	respuesta= prompt("¿Desea ingresar otro valor?").toLowerCase();
	}
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;


}//FIN DE LA FUNCIÓN