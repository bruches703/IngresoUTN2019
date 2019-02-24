function Mostrar()
{
	/*Declaracion positivos*/
	var sumaPos=0, cantidadPos=0, promPos=0;
	/*Declaracion negativos*/
	var sumaNeg=0, cantidadNeg=0, promNeg=0;
	/*Declaraciones restantes*/
	var ceros=0, pares=0, diferencia=0, num=0;
	var respuesta="si";
/*Bucle de prompt de ingreso de datos*/
	while(respuesta=="si")
	{
		num = parseFloat(prompt("Ingrese numero"));
		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		if (num<0)
		{
			sumaNeg=sumaNeg+num;
			cantidadNeg++;
			promNeg=sumaNeg/cantidadNeg;
			promNeg=promNeg.toFixed(2)
		}
		else if (num>0)
		{
			sumaPos=sumaPos+num;
			cantidadPos++;
			promPos=sumaPos/cantidadPos;
			promPos=promPos.toFixed(2);
		}
		else
		{
			ceros++;
		}
		if (num%2==0)
		{
			pares++;
		}
	}
	/*Diferencia entre positivos y negativos y devolucion de datos*/
	diferencia=sumaPos+sumaNeg;
	document.write("Numeros ingresados: <br><br>Suma de positivos: "+sumaPos+"<br>Suma de negativos: "+sumaNeg+"<br><br>Cantidad de positivos: "+cantidadPos+"<br>Cantidad de negativos: "+cantidadNeg+"<br><br>Promedio de los positivos: "+promPos+"<br>Promedio de los negativos: "+promNeg+"<br><br>Cantidad de pares: "+pares+"<br>Cantidad de ceros: "+ceros+"<br><br>Diferencia entre positivos y negativos: "+diferencia);



}//FIN DE LA FUNCIÓN