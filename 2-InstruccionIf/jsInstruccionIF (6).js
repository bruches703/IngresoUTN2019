function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (edad<13)
{
    alert("es un niño");
}
else if(edad>=13 && edad<=17)
{
    alert("Es un adolescente");
}
else
{
    alert("es adulto");
}



}//FIN DE LA FUNCIÓN
