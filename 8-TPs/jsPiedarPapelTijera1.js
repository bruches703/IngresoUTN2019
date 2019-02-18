/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
eleccionMaquina = Math.floor(Math.random()*3)+1;
alert (eleccionMaquina);
}//FIN DE LA FUNCIÓN
/*
function piedra()
{
    if(eleccionMaquina == 1)
    {
        alert ("Empate");
    }
	else if (eleccionMaquina==2)
    {
        alert ("Perdiste");
    }
    else
    {
        alert ("Has ganado");
    }
}//FIN DE LA FUNCIÓN 
function papel()
{
    if(eleccionMaquina == 2)
    {
        alert("Empate");
    }
    else if(eleccionMaquina==1)
    {
        alert("Has ganado");
    }
    else
    {
        alert ("Has perdido");
    }
}//FIN DE LA FUNCIÓN */
function tijera()
{
	if(eleccionMaquina==3)
    {
        alert("Empate");
    }
    else if (eleccionMaquina==1)
    {
        alert("Has ganado");
    }
    else
    {
        alert("Perdiste");
    }
}//FIN DE LA FUNCIÓN