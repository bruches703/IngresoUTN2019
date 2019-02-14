function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var nota = Math.floor(Math.random()*10);

	if (nota >= 9)
	{
		alert(nota +", Exelente");
	}
	
	if (nota < 9 && nota >= 4)
	{
		alert(nota +", Aprobado");
	}
	if (nota < 4)
	{
		alert(nota +", Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN