function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var flag=0;
	var num=0;
	var respuesta;

	do
	{
		numero= parseInt(prompt("Ingrese numero"));
				while(isNaN(numero))
				{
					numero= parseInt(prompt("No es un numero, reingrese valor"));
				}
			if(numero >=0)
			{
				positivo=positivo+numero;
			}
			else
			{
				negativo=negativo*numero;
				flag=1;				
			}
		respuesta= prompt("Desea ingresar otro numero? Si o NO").toLowerCase();
		contador++;
	}while(respuesta=='si');
	if(flag==0)
	{
		negativo=0;
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN