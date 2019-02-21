function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num=0;
	var respuesta='si';

		while(respuesta=='si')
	{
		numero= parseInt(prompt("Ingrese numero"));
			if(numero >=0)
			{
				positivo=positivo+numero;
			}
			else
			{
				negativo=negativo*numero;
			}
		respuesta= prompt("Desea ingresar otro numero? Si o NO").toLowerCase();
		contador++;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN