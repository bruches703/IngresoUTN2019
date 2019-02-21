function Mostrar()
{
	var numero=0;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while(respuesta=='si')
	{
		numero= parseInt(prompt("Ingrese numero"));
		acumulador=acumulador+numero;
		respuesta= prompt("Desea ingresar otro numero? Si o NO").toLowerCase();
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN