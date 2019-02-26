function Mostrar()
{
	var numero=0;
	var contador=0;
	var acumulador=0;
	var respuesta;
	
	do
	{
		numero= parseInt(prompt("Ingrese numero"));
		acumulador=acumulador+numero;
		respuesta= prompt("Desea ingresar otro numero? Si o NO").toLowerCase();
		contador++;
	}
	while(respuesta=='si');

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN