function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;

if (edad<13)
{
    alert("es un niño");
}
if (edad>=13 && edad<=17)
{
    alert("Es un adolescente");
}
if (edad>17)
{
    alert("es adulto");
}



}//FIN DE LA FUNCIÓN
