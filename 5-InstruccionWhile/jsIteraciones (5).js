function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo= sexo.toLowerCase();
    while(sexo!="f" && sexo!= "m")
    {
        alert("no existe ese sexo");
        sexo = prompt("ingrese f ó m .");
        sexo=sexo.toLowerCase();
    }


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN