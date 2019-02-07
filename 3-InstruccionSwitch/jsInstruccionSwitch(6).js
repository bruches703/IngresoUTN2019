function Mostrar()
{
//tomo la hora
var laHora = document.getElementById('hora').value;
    if (laHora>=7 && laHora<=11)
    {
        alert("Es de mañana.");
    }

    if(laHora>=12 && laHora<=19)
    {
        alert("Es de tarde.");
    }

    if(laHora>=20 && laHora<=24)
    {
        alert("Es de noche");
    }

    if(laHora>=0 && laHora<=6)
    {
        alert("Es de noche");
    }
    
    if(laHora<0 || laHora>24)
    {
        alert("la hora no existe");
    }


}//FIN DE LA FUNCIÓN