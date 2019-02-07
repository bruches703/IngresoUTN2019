function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

	if(mesDelAño=="Febrero")
    {
        alert("No tiene mas de 29 dias");
    }
    else
    {
        alert("Este mes tiene 30 o mas dias");
    }


}//FIN DE LA FUNCIÓN