function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var i=1;

	while (i<6)
	{
	var numero = parseInt(prompt("Ingrese el numero "+ i));
	acumulador=acumulador+numero;
	i=i+1;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN