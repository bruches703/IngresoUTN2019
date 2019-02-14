function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño)
    {
        case "Enero":
        case "Febrero":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor!!");
            break;
      
        case "Marzo":
        case "Abril":
        case "Junio":
        case "Mayo":
            alert("Falta para el invierno.");
            break;
        
        case "Julio":
        case "Agosto":
            alert("Hace frio, abrigate");
            break;
        
    
    }
}



//FIN DE LA FUNCIÓN